// pages/api/donee_credentials.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/donee_credentials.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim());
    const doneeCredentials = lines.map(line => {
      const [username, password] = line.split(',').map(part => part.trim());
      return { username, password };
    });
    res.status(200).json(doneeCredentials);
  } catch (error) {
    res.status(500).json({ message: 'Error reading donee credentials file' });
  }
}
