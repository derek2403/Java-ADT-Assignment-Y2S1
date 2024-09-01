import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/receivehistory.txt');
    const data = await fs.readFile(filePath, 'utf8');
    const received = data.split('\n').filter(line => line.trim() !== '');

    const receivedCounts = received.reduce((acc, item) => {
      const [, username] = item.split(',');
      acc[username] = (acc[username] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json(receivedCounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate received report' });
  }
}