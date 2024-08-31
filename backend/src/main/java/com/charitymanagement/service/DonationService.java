package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donation;

@Service
public class DonationService {

    private static final String DONATION_FILE = "donations.txt";

    public String addDonation(Donation donation) {
        String donationId = generateDonationId();
        donation.setDonationId(donationId);

        try (FileWriter writer = new FileWriter(DONATION_FILE, true)) {
            String items = String.join("+", donation.getItems());
            writer.write(String.format("%s,%s,%s,%s\n", donationId, donation.getUsername(), donation.getCategory(), items));
            return donationId;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean removeDonation(String donationId) {
        LinkedList<Donation> donations = readDonations();
        boolean removed = false;

        LinkedList<Donation> updatedDonations = new LinkedList<>();
        for (int i = 0; i < donations.size(); i++) {
            Donation d = donations.get(i);
            if (!d.getDonationId().equals(donationId)) {
                updatedDonations.add(d);
            } else {
                removed = true;
            }
        }

        if (removed) {
            writeDonations(updatedDonations);
        }

        return removed;
    }

    public LinkedList<Donation> listDonations(String username) {
        LinkedList<Donation> allDonations = readDonations();
        LinkedList<Donation> userDonations = new LinkedList<>();

        for (int i = 0; i < allDonations.size(); i++) {
            Donation d = allDonations.get(i);
            if (d.getUsername().equals(username)) {
                userDonations.add(d);
            }
        }

        return userDonations;
    }

    private String generateDonationId() {
        return UUID.randomUUID().toString().substring(0, 8);
    }

    private LinkedList<Donation> readDonations() {
        LinkedList<Donation> donations = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONATION_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    Donation donation = new Donation();
                    donation.setDonationId(parts[0]);
                    donation.setUsername(parts[1]);
                    donation.setCategory(parts[2]);
                    donation.setItems(Arrays.asList(parts[3].split("\\+")));
                    donations.add(donation);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return donations;
    }

    private void writeDonations(LinkedList<Donation> donations) {
        try (FileWriter writer = new FileWriter(DONATION_FILE)) {
            for (int i = 0; i < donations.size(); i++) {
                Donation donation = donations.get(i);
                String items = String.join("+", donation.getItems());
                writer.write(String.format("%s,%s,%s,%s\n", donation.getDonationId(), donation.getUsername(), donation.getCategory(), items));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}