// pages/api/credentials.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Use the relative path to the text file
    const filePath = path.join(process.cwd(), '../backend/credentials.txt');
    console.log(`Attempting to read file at: ${filePath}`); // Log the path for debugging

    if (!fs.existsSync(filePath)) {
      throw new Error('File does not exist');
    }

    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim());
    const credentials = lines.map(line => {
      const [username, password] = line.split(',').map(part => part.trim());
      return { username, password };
    });
    
    res.status(200).json(credentials);
  } catch (error) {
    console.error('Error reading credentials file:', error); // Log the error
    res.status(500).json({ message: 'Error reading credentials file', error: error.message });
  }
}
