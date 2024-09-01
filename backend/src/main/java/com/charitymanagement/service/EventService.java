package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Event;

@Service
public class EventService {
    private static final Logger logger = LoggerFactory.getLogger(EventService.class);
    private static final String EVENTS_FILE = "events.txt";

    private LinkedList<Event> events = new LinkedList<>();

    public EventService() {
        loadEventsFromFile();
    }

    public boolean addEvent(Event event) {
        if (!isValidTime(event.getTime())) {
            logger.error("Invalid time format: {}", event.getTime());
            return false;
        }

        event.setEventId(generateRandomId(7));
        logger.info("Attempting to add event: {}", event.getEventId());
        events.add(event);
        return saveEventsToFile();
    }

    public boolean removeEvent(String eventId) {
        logger.info("Attempting to remove event with ID: {}", eventId);
        boolean removed = events.removeIf(event -> event.getEventId().equals(eventId));

        if (removed) {
            logger.info("Event removed successfully: {}", eventId);
            return saveEventsToFile();
        }

        logger.error("Event not found for removal: {}", eventId);
        return false;
    }

    public Event searchEvent(String eventId) {
        logger.info("Searching for event with ID: {}", eventId);
        for (Event event : events) {
            if (event.getEventId().equals(eventId)) {
                return event;
            }
        }
        logger.error("Event not found for ID: {}", eventId);
        return null;
    }

    public boolean amendEventDetails(Event updatedEvent) {
        logger.info("Attempting to amend event details for ID: {}", updatedEvent.getEventId());
        boolean updated = false;
    
        for (int i = 0; i < events.size(); i++) {
            Event event = events.get(i);
            if (event.getEventId().equals(updatedEvent.getEventId())) {
                events.remove(event);
                events.add(updatedEvent);
                updated = true;
                break;
            }
        }
    
        if (updated) {
            logger.info("Event details amended successfully for ID: {}", updatedEvent.getEventId());
            return saveEventsToFile();
        }
    
        logger.error("Failed to amend event details: Event not found for ID: {}", updatedEvent.getEventId());
        return false;
    }

    public LinkedList<Event> listAllEvents() {
        logger.info("Listing all events, total count: {}", events.size());
        return events;
    }

    private void loadEventsFromFile() {
        events.clear();
        try (BufferedReader reader = new BufferedReader(new FileReader(EVENTS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 5) {
                    Event event = new Event();
                    event.setEventId(parts[0]);
                    event.setEventName(parts[1]);
                    event.setVenue(parts[2]);
                    event.setTime(parts[3]);
                    event.setDate(parts[4]);
                    events.add(event);
                }
            }
            logger.info("Loaded {} events from file", events.size());
        } catch (IOException e) {
            logger.error("Error loading events from file", e);
        }
    }
    public boolean eventExists(String eventId) {
        logger.info("Checking if event exists with ID: {}", eventId);
        for (int i = 0; i < events.size(); i++) {
            Event event = events.get(i);
            if (event.getEventId().equals(eventId)) {
                logger.info("Event found with ID: {}", eventId);
                return true;
            }
        }
        logger.info("Event not found with ID: {}", eventId);
        return false;
    }


    private boolean saveEventsToFile() {
        try (FileWriter writer = new FileWriter(EVENTS_FILE)) {
            for (Event event : events) {
                writer.write(String.format("%s,%s,%s,%s,%s\n",
                        event.getEventId(), event.getEventName(), event.getVenue(),
                        event.getTime(), event.getDate()));
            }
            logger.info("Saved {} events to file", events.size());
            return true;
        } catch (IOException e) {
            logger.error("Error saving events to file", e);
            return false;
        }
    }

    private boolean isValidTime(String time) {
        String timeRegex = "^([01]\\d|2[0-3])[0-5]\\d$";
        return Pattern.matches(timeRegex, time);
    }

    private String generateRandomId(int length) {
        StringBuilder id = new StringBuilder();
        String alphanumericPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (int i = 0; i < length; i++) {
            int index = (int) (Math.random() * alphanumericPool.length());
            id.append(alphanumericPool.charAt(index));
        }
        return id.toString();
    }
}
