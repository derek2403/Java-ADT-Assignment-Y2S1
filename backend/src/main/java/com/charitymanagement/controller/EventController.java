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

import com.charitymanagement.adt.LinkedList;
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
            return ResponseEntity.ok("Event created successfully. Event ID: " + event.getEventId());
        } else {
            return ResponseEntity.badRequest().body("Failed to create event");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchEvent(@RequestParam String eventId) {
        logger.info("Searching for event with ID: {}", eventId);
        Event event = eventService.searchEvent(eventId);
        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable String eventId) {
        boolean success = eventService.removeEvent(eventId);
        if (success) {
            return ResponseEntity.ok("Event deleted successfully");
        } else {
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
    public ResponseEntity<LinkedList<Event>> listAllEvents() {
        return ResponseEntity.ok(eventService.listAllEvents());
    }

    @GetMapping("/{eventId}/volunteers")
    public ResponseEntity<?> listVolunteersForEvent(@PathVariable String eventId) {
        // Simplify by directly listing volunteers
        return ResponseEntity.ok(eventService.listVolunteersForEvent(eventId));
    }
}
