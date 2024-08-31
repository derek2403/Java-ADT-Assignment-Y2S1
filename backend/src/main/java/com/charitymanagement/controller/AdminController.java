package com.charitymanagement.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;
import com.charitymanagement.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/donees")
    public ResponseEntity<List<Donee>> listDonees(@RequestParam(required = false) String criteria,
                                                  @RequestParam(required = false) String type) {
        LinkedList<Donee> doneesList = adminService.listDonees(criteria, type);
        List<Donee> donees = new ArrayList<>();
        for (int i = 0; i < doneesList.size(); i++) {
            donees.add(doneesList.get(i));
        }
        return ResponseEntity.ok(donees);
    }

    @GetMapping("/donors")
    public ResponseEntity<List<Donor>> listDonors(@RequestParam(required = false) String criteria,
                                                  @RequestParam(required = false) String type) {
        LinkedList<Donor> donorsList = adminService.listDonors(criteria, type);
        List<Donor> donors = new ArrayList<>();
        for (int i = 0; i < donorsList.size(); i++) {
            donors.add(donorsList.get(i));
        }
        return ResponseEntity.ok(donors);
    }

    @PostMapping("/execute-donation")
    public ResponseEntity<String> executeDonation(@RequestParam String doneeId, @RequestParam String donationId) {
        String transactionId = adminService.executeDonation(doneeId, donationId);
        if (transactionId != null) {
            return ResponseEntity.ok("Donation executed successfully. Transaction ID: " + transactionId);
        } else {
            return ResponseEntity.badRequest().body("Failed to execute donation");
        }
    }

    @GetMapping("/report/{type}")
    public ResponseEntity<LinkedList<Map<String, String>>> generateReport(@PathVariable String type) {
        LinkedList<Map<String, String>> report = adminService.generateReport(type);
        return ResponseEntity.ok(report);
    }
}