package com.charitymanagement.controller;

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

    @Autowired
    private DonationService donationService;

    @PostMapping("/add")
    public ResponseEntity<String> addDonation(@RequestBody Donation donation) {
        String donationId = donationService.addDonation(donation);
        if (donationId != null) {
            return ResponseEntity.ok("Donation added successfully. Donation ID: " + donationId);
        } else {
            return ResponseEntity.badRequest().body("Failed to add donation");
        }
    }

    @DeleteMapping("/remove/{donationId}")
    public ResponseEntity<String> removeDonation(@PathVariable String donationId) {
        boolean success = donationService.removeDonation(donationId);
        if (success) {
            return ResponseEntity.ok("Donation removed successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to remove donation");
        }
    }

    @GetMapping("/list/{username}")
    public ResponseEntity<LinkedList<Donation>> listDonations(@PathVariable String username) {
        LinkedList<Donation> donations = donationService.listDonations(username);
        return ResponseEntity.ok(donations);
    }
    
}