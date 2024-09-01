import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const registrationsFilePath = path.join(process.cwd(), '../backend/eventregistrations.txt');
    const eventsFilePath = path.join(process.cwd(), '../backend/events.txt');
    
    const registrationsData = await fs.readFile(registrationsFilePath, 'utf8');
    const eventsData = await fs.readFile(eventsFilePath, 'utf8');
    
    const registrations = registrationsData.split('\n').filter(line => line.trim() !== '');
    const events = eventsData.split('\n').filter(line => line.trim() !== '');
    
    console.log('Registrations:', registrations);
    console.log('Events:', events);
    
    // Extract registered event IDs for the given username
    const registeredEventIds = registrations
      .filter(line => {
        const [, , registeredUsername] = line.split(',').map(item => item.trim());
        return registeredUsername === username;
      })
      .map(line => line.split(',')[1].trim());
    
    console.log('Registered Event IDs for', username, ':', registeredEventIds);
    
    // Extract event details
    const eventDetails = events
      .filter(line => {
        const [eventId] = line.split(',');
        return registeredEventIds.includes(eventId.trim());
      })
      .map(line => {
        const [eventId, eventName, venue, time, date] = line.split(',').map(item => item.trim());
        return { eventId, eventName, venue, time, date }; // Include eventId in the returned object
      });
    
    console.log('Event Details:', eventDetails);
    
    res.status(200).json(eventDetails);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to retrieve registered events' });
  }
}