import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Construct the path to the events file
  const filePath = path.join(process.cwd(), '../backend/events.txt');
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // Read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }

    // Split the file contents into lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Parse the lines into an array of events
    const events = lines.map(line => {
      const [eventId, eventName, date, time] = line.split(',');
      return { eventId, eventName, date, time };
    });

    // Send the events data as a JSON response
    res.status(200).json(events);
  });
}
