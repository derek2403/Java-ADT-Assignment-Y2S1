import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const { month } = req.query;
    const filePath = path.join(process.cwd(), '../backend/transaction.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const transactions = data.split('\n').filter(line => line.trim() !== '');

    let filteredTransactions = transactions;
    if (month) {
      filteredTransactions = transactions.filter(transaction => {
        const [, , , date] = transaction.split(',');
        return new Date(date).getMonth() + 1 === parseInt(month);
      });
    }

    const formattedTransactions = filteredTransactions.map(transaction => {
      const [transid, requestid, donationid, date] = transaction.split(',');
      return { transid, requestid, donationid, date };
    });

    res.status(200).json(formattedTransactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate transaction report' });
  }
}