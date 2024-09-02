package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donation;

@Service
public class DonationService {

    private static final String DONATIONS_FILE = "donations.txt";
    private static final Logger logger = LoggerFactory.getLogger(DonationService.class);

    private LinkedList<Donation> donations = new LinkedList<>();

    public String addDonation(String username, String category, String items) {
        logger.info("Attempting to add donation for username: {}", username);
        String donationId = UUID.randomUUID().toString().substring(0, 8);
        try (FileWriter writer = new FileWriter(DONATIONS_FILE, true)) {
            writer.write(String.format("%s,%s,%s,%s\n", donationId, username, category, items));
            logger.info("Donation added successfully for username: {} with donation ID: {}", username, donationId);
            return donationId;
        } catch (IOException e) {
            logger.error("Error saving donation to file", e);
            return null;
        }
    }

    public boolean removeDonation(String donationId) {
        logger.info("Attempting to remove donation with ID: {}", donationId);
        LinkedList<String> remainingDonations = new LinkedList<>();
        boolean found = false;

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (!parts[0].equals(donationId)) {
                    remainingDonations.add(line);
                } else {
                    found = true;
                }
            }
        } catch (IOException e) {
            logger.error("Error reading donations file", e);
            return false;
        }

        if (!found) {
            logger.error("Donation with ID {} not found", donationId);
            return false;
        }

        try (FileWriter writer = new FileWriter(DONATIONS_FILE)) {
            for (int i = 0; i < remainingDonations.size(); i++) {
                writer.write(remainingDonations.get(i) + "\n");
            }
            logger.info("Donation with ID {} removed successfully", donationId);
            return true;
        } catch (IOException e) {
            logger.error("Error updating donations file", e);
            return false;
        }
    }

    public LinkedList<Donation> listDonations(String username) {
        logger.info("Listing donations for username: {}", username);
        LinkedList<Donation> userDonations = new LinkedList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4 && parts[1].equals(username)) {
                    Donation donation = new Donation();
                    donation.setDonationId(parts[0]);
                    donation.setUsername(parts[1]);
                    donation.setCategory(parts[2]);
                    donation.setItems(parts[3]);
                    userDonations.add(donation);
                }
            }
        } catch (IOException e) {
            logger.error("Error reading donations file", e);
        }

        return userDonations;
    }
}