package com.charitymanagement.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donation;
import com.charitymanagement.service.DonationService;

@RestController
@RequestMapping("/api/donations")
public class DonationController {

    private static final Logger logger = LoggerFactory.getLogger(DonationController.class);

    @Autowired
    private DonationService donationService;

    @PostMapping("/add")
    public ResponseEntity<String> addDonation(@RequestBody Donation donation) {
        logger.info("Received request to add donation: {}", donation);
        if (donation == null || donation.getUsername() == null || donation.getCategory() == null || donation.getItems() == null || donation.getItems().isEmpty()) {
            logger.error("Invalid donation data received");
            return ResponseEntity.badRequest().body("Invalid donation data");
        }
        
        String items = String.join("+", donation.getItems());
        String donationId = donationService.addDonation(donation.getUsername(), donation.getCategory(), items);
        if (donationId != null) {
            logger.info("Donation added successfully. Donation ID: {}", donationId);
            return ResponseEntity.ok("Donation added successfully. Donation ID: " + donationId);
        } else {
            logger.error("Failed to add donation");
            return ResponseEntity.badRequest().body("Failed to add donation");
        }
    }

    @DeleteMapping("/remove/{donationId}")
    public ResponseEntity<String> removeDonation(@PathVariable String donationId) {
        logger.info("Received request to remove donation with ID: {}", donationId);
        boolean success = donationService.removeDonation(donationId);
        if (success) {
            logger.info("Donation removed successfully. Donation ID: {}", donationId);
            return ResponseEntity.ok("Donation removed successfully");
        } else {
            logger.error("Failed to remove donation with ID: {}", donationId);
            return ResponseEntity.badRequest().body("Failed to remove donation");
        }
    }

    @GetMapping("/list/{username}")
    public ResponseEntity<LinkedList<Donation>> listDonations(@PathVariable String username) {
        logger.info("Received request to list donations for username: {}", username);
        LinkedList<Donation> donations = donationService.listDonations(username);
        logger.info("Retrieved {} donations for username: {}", donations.size(), username);
        return ResponseEntity.ok(donations);
    }
}