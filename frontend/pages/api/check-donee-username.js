import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    const filePath = path.join(process.cwd(), '../backend/donee_credentials.txt');
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

    const donees = lines.map(line => {
      const [user, name, email, age, type, needs] = line.split(',');
      if (!user) {
        throw new Error(`Line format is incorrect: ${line}`);
      }
      return { username: user.trim() };
    });

    console.log('Donees read from file:', donees);

    const userExists = donees.some(donee => donee.username === username);
    res.status(200).json({ exists: userExists });
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ message: 'Error reading file', error: error.message });
  }
}
