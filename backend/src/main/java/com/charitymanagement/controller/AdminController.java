package com.charitymanagement.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;
import com.charitymanagement.model.TransactionRequest;
import com.charitymanagement.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/donees")
    public ResponseEntity<LinkedList<Donee>> listDonees(@RequestParam(required = false) String criteria,
                                                        @RequestParam(required = false) String type) {
        return ResponseEntity.ok(adminService.listDonees(criteria, type));
    }

    @GetMapping("/donors")
    public ResponseEntity<LinkedList<Donor>> listDonors(@RequestParam(required = false) String criteria,
                                                        @RequestParam(required = false) String type) {
        return ResponseEntity.ok(adminService.listDonors(criteria, type));
    }

    @PostMapping("/create-transaction")
    public ResponseEntity<String> createTransaction(@RequestBody TransactionRequest request) {
        String transactionId = adminService.createTransaction(request.getDonationId(), request.getRequestId());
        if (transactionId != null) {
            return ResponseEntity.ok("Transaction created successfully. Transaction ID: " + transactionId);
        } else {
            return ResponseEntity.badRequest().body("Failed to create transaction");
        }
    }

    @GetMapping("/report/donor")
    public ResponseEntity<Map<String, Integer>> generateDonorReport() {
        return ResponseEntity.ok(adminService.generateDonorReport());
    }

    @GetMapping("/report/donee")
    public ResponseEntity<Map<String, Integer>> generateDoneeReport() {
        return ResponseEntity.ok(adminService.generateDoneeReport());
    }

    @GetMapping("/report/transaction")
    public ResponseEntity<LinkedList<Map<String, String>>> generateTransactionReport() {
        return ResponseEntity.ok(adminService.generateTransactionReport());
    }

    @GetMapping("/report/donation-item")
    public ResponseEntity<Map<String, LinkedList<String>>> generateDonationItemReport() {
        return ResponseEntity.ok(adminService.generateDonationItemReport());
    }

    @GetMapping("/report/donation-request")
    public ResponseEntity<Map<String, LinkedList<String>>> generateDonationRequestReport() {
        return ResponseEntity.ok(adminService.generateDonationRequestReport());
    }
}