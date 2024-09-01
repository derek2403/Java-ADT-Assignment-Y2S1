// pages/api/donations.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/donations.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim());
    const donations = lines.map(line => {
      const [donationId, username, category, items] = line.split(',').map(part => part.trim());
      return { donationId, username, category, items };
    });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error reading donation file' });
  }
}
