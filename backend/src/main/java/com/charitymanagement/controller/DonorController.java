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

import com.charitymanagement.model.Donor;
import com.charitymanagement.service.DonorService;

@RestController
@RequestMapping("/api/donors")
public class DonorController {
    private static final Logger logger = LoggerFactory.getLogger(DonorController.class);

    @Autowired
    private DonorService donorService;

    @PostMapping("/create")
    public ResponseEntity<String> createAccount(@RequestBody Donor donor) {
        boolean success = donorService.createAccount(donor);
        if (success) {
            return ResponseEntity.ok("Account created successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to create account");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchDonor(@RequestParam String username) {
        logger.info("Searching for donor with username: {}", username);
        Donor donor = donorService.searchDonor(username);
        if (donor != null) {
            logger.info("Donor found: {}", donor.getUsername());
            return ResponseEntity.ok(donor);
        } else {
            logger.error("Donor not found for username: {}", username);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<String> deleteDonor(@PathVariable String username) {
        logger.info("Attempting to delete donor with username: {}", username);
        boolean success = donorService.deleteDonor(username);
        if (success) {
            logger.info("Donor deleted successfully: {}", username);
            return ResponseEntity.ok("Donor deleted successfully");
        } else {
            logger.error("Failed to delete donor: {}", username);
            return ResponseEntity.badRequest().body("Failed to delete donor");
        }
    }
    
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Donor donor) {
        logger.info("Signin attempt for username: {}", donor.getUsername());
        try {
            if (donor.getUsername() == null || donor.getPassword() == null) {
                logger.error("Signin failed: username or password is null");
                return ResponseEntity.badRequest().body("Username and password are required");
            }
            Donor authenticatedDonor = donorService.signIn(donor.getUsername(), donor.getPassword());
            if (authenticatedDonor != null) {
                logger.info("Signin successful for username: {}", donor.getUsername());
                return ResponseEntity.ok(authenticatedDonor);
            } else {
                logger.error("Signin failed: invalid credentials for username: {}", donor.getUsername());
                return ResponseEntity.badRequest().body("Invalid credentials");
            }
        } catch (Exception e) {
            logger.error("Unexpected error during signin for username: {}", donor.getUsername(), e);
            return ResponseEntity.status(500).body("An unexpected error occurred");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateDetails(@RequestBody Donor donor) {
        boolean success = donorService.updateDetails(donor);
        if (success) {
            return ResponseEntity.ok("Details updated successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to update details");
        }
    }
}