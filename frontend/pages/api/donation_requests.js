// pages/api/donation_requests.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/donation_request.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim());
    const donationRequests = lines.map(line => {
      const [username, category, items] = line.split(',').map(part => part.trim());
      return { username, category, items };
    });
    res.status(200).json(donationRequests);
  } catch (error) {
    res.status(500).json({ message: 'Error reading donation request file' });
  }
}
