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

import com.charitymanagement.model.Volunteer;
import com.charitymanagement.service.VolunteerService;

@RestController
@RequestMapping("/api/volunteers")
public class VolunteerController {
    private static final Logger logger = LoggerFactory.getLogger(VolunteerController.class);
    @Autowired
    private VolunteerService volunteerService;


    @PostMapping("/create")
    public ResponseEntity<String> createVolunteer(@RequestBody Volunteer volunteer) {
        logger.info("Attempting to create volunteer with username: {}", volunteer.getUsername());
        String username = volunteerService.addVolunteer(volunteer);
        if (username != null) {
            return ResponseEntity.ok("Volunteer created successfully. Username: " + username);
        } else {
            return ResponseEntity.badRequest().body("Failed to create volunteer. Username already exists.");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateVolunteer(@RequestBody Volunteer volunteer) {
        logger.info("Attempting to update volunteer with username: {}", volunteer.getUsername());
        boolean success = volunteerService.updateVolunteer(volunteer);
        if (success) {
            return ResponseEntity.ok("Volunteer details updated successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to update volunteer details.");
        }
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<String> deleteVolunteer(@PathVariable String username) {
        logger.info("Attempting to delete volunteer with username: {}", username);
        boolean success = volunteerService.deleteVolunteer(username);
        if (success) {
            return ResponseEntity.ok("Volunteer deleted successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to delete volunteer.");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchVolunteer(@RequestParam String username) {
        logger.info("Searching for volunteer with username: {}", username);
        Volunteer volunteer = volunteerService.findVolunteerByUsername(username);
        if (volunteer != null) {
            return ResponseEntity.ok(volunteer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{username}/register/{eventId}")
    public ResponseEntity<String> registerForEvent(@PathVariable String username, @PathVariable String eventId) {
        logger.info("Received request to register volunteer {} for event {}", username, eventId);
        String registrationId = volunteerService.registerForEvent(username, eventId);
        if (registrationId != null) {
            return ResponseEntity.ok("Registration successful. Registration ID: " + registrationId);
        } else {
            return ResponseEntity.badRequest().body("Failed to register for the event. Please check if the event exists and the volunteer is valid.");
        }
    }

    @DeleteMapping("/{username}/events/{eventId}")
    public ResponseEntity<String> removeFromEvent(@PathVariable String username, @PathVariable String eventId) {
        logger.info("Received request to remove volunteer {} from event {}", username, eventId);
        
        if (username == null || username.isEmpty() || eventId == null || eventId.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid username or eventId");
        }
        
        try {
            boolean success = volunteerService.removeVolunteerFromEvent(username, eventId);
            if (success) {
                return ResponseEntity.ok("Volunteer successfully removed from the event");
            } else {
                return ResponseEntity.badRequest().body("Failed to remove volunteer from the event");
            }
        } catch (RuntimeException e) {
            logger.error("Error removing volunteer from event: ", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Volunteer volunteer) {
        logger.info("Signin attempt for username: {}", volunteer.getUsername());
        if (volunteer.getUsername() == null || volunteer.getPassword() == null) {
            logger.error("Signin failed: username or password is null");
            return ResponseEntity.badRequest().body("Username and password are required");
        }
        Volunteer authenticatedVolunteer = volunteerService.signIn(volunteer.getUsername(), volunteer.getPassword());
        if (authenticatedVolunteer != null) {
            logger.info("Signin successful for username: {}", volunteer.getUsername());
            return ResponseEntity.ok(authenticatedVolunteer);
        } else {
            logger.error("Signin failed: invalid credentials for username: {}", volunteer.getUsername());
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }
}