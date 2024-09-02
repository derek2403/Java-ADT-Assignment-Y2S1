import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const validateTime = (time) => {
    // Regular expression for 24-hour time format (HHmm)
    const timeRegex = /^([01]\d|2[0-3])[0-5]\d$/;
    return timeRegex.test(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateTime(time)) {
      setMessage('Invalid time format. Please use HHmm format.');
      return;
    }

    // Prepare event data
    const eventData = {
      eventName,
      venue,
      time,
      date,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/events/create', eventData);

      if (response.status === 200) {
        setMessage('Event added successfully!');
      } else {
        setMessage('Failed to add event.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
      setMessage('Error adding event. Please try again.');
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time (in 24hr format HHmm):</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Event</button>
      </form>

      {message && <p>{message}</p>}

      <style jsx>{`
        .create-event-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }
        button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #0056b3;
        }
        p {
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CreateEvent;
