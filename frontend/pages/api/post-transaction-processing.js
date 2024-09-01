// pages/api/post-transaction-processing.js
import fs from 'fs/promises';
import path from 'path';

// Update these paths to match your project structure
const TRANSACTIONS_FILE = path.join(process.cwd(), '../backend/transaction.txt');
const DONATION_REQUESTS_FILE = path.join(process.cwd(), '../backend/donation_requests.txt');
const DONATIONS_FILE = path.join(process.cwd(), '../backend/donations.txt');
const RECEIVE_HISTORY_FILE = path.join(process.cwd(), '../backend/receivehistory.txt');
const DONATE_HISTORY_FILE = path.join(process.cwd(), '../backend/donatehistory.txt');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // 1. Read transaction.txt
      const transactionData = await fs.readFile(TRANSACTIONS_FILE, 'utf-8');
      const transactions = transactionData.split('\n').filter(Boolean);
      if (transactions.length === 0) {
        throw new Error('No transactions found.');
      }
      const lastTransaction = transactions[transactions.length - 1].split(',');
      const [, requestId, donationId] = lastTransaction.map(part => part.trim());

      console.log('Last Transaction:', lastTransaction);
      console.log('Donation ID:', donationId);
      console.log('Request ID:', requestId);

      // 2 & 3. Process donation request
      const requestData = await fs.readFile(DONATION_REQUESTS_FILE, 'utf-8');
      const requests = requestData.split('\n').filter(Boolean);

      console.log('Requests:', requests);

      const matchingRequest = requests.find(req => req.split(',')[0].trim() === requestId);

      console.log('Matching Request:', matchingRequest);

      if (matchingRequest) {
        await fs.appendFile(RECEIVE_HISTORY_FILE, matchingRequest + '\n');
        console.log('Appended to RECEIVE_HISTORY_FILE:', matchingRequest);
      } else {
        console.warn('Request ID not found:', requestId);
      }

      // 4. Remove processed request
      const updatedRequests = requests.filter(req => req.split(',')[0].trim() !== requestId);
      console.log('Updated Requests:', updatedRequests);
      await fs.writeFile(DONATION_REQUESTS_FILE, updatedRequests.join('\n') + '\n');

      // 5 & 6. Process donation
      const donationData = await fs.readFile(DONATIONS_FILE, 'utf-8');
      const donations = donationData.split('\n').filter(Boolean);

      console.log('Donations:', donations);

      const matchingDonation = donations.find(don => don.split(',')[0].trim() === donationId);

      console.log('Matching Donation:', matchingDonation);

      if (matchingDonation) {
        await fs.appendFile(DONATE_HISTORY_FILE, matchingDonation + '\n');
        console.log('Appended to DONATE_HISTORY_FILE:', matchingDonation);
      } else {
        console.warn('Donation ID not found:', donationId);
      }

      // 7. Remove processed donation
      const updatedDonations = donations.filter(don => don.split(',')[0].trim() !== donationId);
      console.log('Updated Donations:', updatedDonations);
      await fs.writeFile(DONATIONS_FILE, updatedDonations.join('\n') + '\n');

      res.status(200).json({ message: 'Post-transaction processing completed successfully' });
    } catch (error) {
      console.error('Error in post-transaction processing:', error);
      res.status(500).json({ error: 'Failed to process transaction' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}