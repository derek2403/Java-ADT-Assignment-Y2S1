// pages/api/donor_details.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), '../backend/donor_details.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim());
    const donorDetails = lines.map(line => {
      const [username, name, email, age, type, category] = line.split(',').map(part => part.trim());
      return { username, name, email, age, type, category };
    });
    res.status(200).json(donorDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error reading donor details file' });
  }
}
