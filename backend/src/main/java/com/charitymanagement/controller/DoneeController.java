package com.charitymanagement.controller;

import com.charitymanagement.model.Donee;
import com.charitymanagement.service.DoneeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/donees")
public class DoneeController {
    private static final Logger logger = LoggerFactory.getLogger(DoneeController.class);

    @Autowired
    private DoneeService doneeService;

    @PostMapping("/create")
    public ResponseEntity<String> createAccount(@RequestBody Donee donee) {
        boolean success = doneeService.createAccount(donee);
        if (success) {
            return ResponseEntity.ok("Account created successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to create account");
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody Donee donee) {
        logger.info("Signin attempt for username: {}", donee.getUsername());
        if (donee.getUsername() == null || donee.getPassword() == null) {
            logger.error("Signin failed: username or password is null");
            return ResponseEntity.badRequest().body("Username and password are required");
        }
        Donee authenticatedDonee = doneeService.signIn(donee.getUsername(), donee.getPassword());
        if (authenticatedDonee != null) {
            logger.info("Signin successful for username: {}", donee.getUsername());
            return ResponseEntity.ok(authenticatedDonee);
        } else {
            logger.error("Signin failed: invalid credentials for username: {}", donee.getUsername());
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateDetails(@RequestBody Donee donee) {
        boolean success = doneeService.updateDetails(donee);
        if (success) {
            return ResponseEntity.ok("Details updated successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to update details");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchDonee(@RequestParam String username) {
        logger.info("Searching for donee with username: {}", username);
        Donee donee = doneeService.searchDonee(username);
        if (donee != null) {
            logger.info("Donee found: {}", donee.getUsername());
            return ResponseEntity.ok(donee);
        } else {
            logger.error("Donee not found for username: {}", username);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<String> deleteDonee(@PathVariable String username) {
        logger.info("Attempting to delete donee with username: {}", username);
        boolean success = doneeService.deleteDonee(username);
        if (success) {
            logger.info("Donee deleted successfully: {}", username);
            return ResponseEntity.ok("Donee deleted successfully");
        } else {
            logger.error("Failed to delete donee: {}", username);
            return ResponseEntity.badRequest().body("Failed to delete donee");
        }
    }
}