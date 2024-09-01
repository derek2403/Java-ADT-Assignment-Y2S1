package com.charitymanagement.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.charitymanagement.model.Event;
import com.charitymanagement.service.EventService;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private static final Logger logger = LoggerFactory.getLogger(EventController.class);

    @Autowired
    private EventService eventService;

    @PostMapping("/create")
    public ResponseEntity<String> createEvent(@RequestBody Event event) {
        boolean success = eventService.addEvent(event);
        if (success) {
            return ResponseEntity.ok("Event created successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to create event");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchEvent(@RequestParam String eventId) {
        logger.info("Searching for event with ID: {}", eventId);
        Event event = eventService.searchEvent(eventId);
        if (event != null) {
            logger.info("Event found: {}", event.getEventId());
            return ResponseEntity.ok(event);
        } else {
            logger.error("Event not found for ID: {}", eventId);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable String eventId) {
        logger.info("Attempting to delete event with ID: {}", eventId);
        boolean success = eventService.removeEvent(eventId);
        if (success) {
            logger.info("Event deleted successfully: {}", eventId);
            return ResponseEntity.ok("Event deleted successfully");
        } else {
            logger.error("Failed to delete event: {}", eventId);
            return ResponseEntity.badRequest().body("Failed to delete event");
        }
    }

    @PutMapping("/amend")
    public ResponseEntity<String> amendEventDetails(@RequestBody Event updatedEvent) {
        boolean success = eventService.amendEventDetails(updatedEvent);
        if (success) {
            return ResponseEntity.ok("Event details amended successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to amend event details");
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listAllEvents() {
        return ResponseEntity.ok(eventService.listAllEvents());
    }
}
