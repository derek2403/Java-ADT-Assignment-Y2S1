import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/donatehistory.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const donations = data.split('\n').filter(line => line.trim() !== '');

    const donationCounts = donations.reduce((acc, donation) => {
      const [, username] = donation.split(',');
      acc[username] = (acc[username] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json(donationCounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate donated report' });
  }
}