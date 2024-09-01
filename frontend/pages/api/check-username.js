import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    const filePath = path.join(process.cwd(), '../backend/credentials.txt');
    console.log('Attempting to read file at:', filePath);

    if (!fs.existsSync(filePath)) {
      console.error('File does not exist');
      throw new Error('File does not exist');
    }

    const data = fs.readFileSync(filePath, 'utf8');
    if (!data) {
      throw new Error('File is empty');
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');
    console.log('Lines read from file:', lines);

    const users = lines.map(line => {
      const [user, pass] = line.split(',');
      if (!user || !pass) {
        throw new Error(`Line format is incorrect: ${line}`);
      }
      return { username: user.trim(), password: pass.trim() };
    });

    console.log('Users read from file:', users);

    const userExists = users.some(user => user.username === username);
    res.status(200).json({ exists: userExists });
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Error reading file', error: error.message });
  }
}
