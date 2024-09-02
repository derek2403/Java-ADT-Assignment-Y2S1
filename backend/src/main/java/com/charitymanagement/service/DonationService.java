package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.Array;
import com.charitymanagement.adt.ArrayList;
import com.charitymanagement.model.Donation;

@Service
public class DonationService {

    private static final String DONATION_FILE = "donations.txt";

    public String addDonation(Donation donation) {
        String donationId = generateDonationId();
        donation.setDonationId(donationId);

        try (FileWriter writer = new FileWriter(DONATION_FILE, true)) {
            String items = joinItems(donation.getItems());
            writer.write(String.format("%s,%s,%s,%s\n", donationId, donation.getUsername(), donation.getCategory(), items));
            return donationId;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean removeDonation(String donationId) {
        Array<Donation> donations = readDonations();
        boolean removed = false;

        Array<Donation> updatedDonations = new ArrayList<>();
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

    public Array<Donation> listDonations(String username) {
        Array<Donation> allDonations = readDonations();
        Array<Donation> userDonations = new ArrayList<>();

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

    private Array<Donation> readDonations() {
        Array<Donation> donations = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONATION_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    Donation donation = new Donation();
                    donation.setDonationId(parts[0]);
                    donation.setUsername(parts[1]);
                    donation.setCategory(parts[2]);
                    donation.setItems(splitItems(parts[3]));
                    donations.add(donation);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return donations;
    }

    private void writeDonations(Array<Donation> donations) {
        try (FileWriter writer = new FileWriter(DONATION_FILE)) {
            for (int i = 0; i < donations.size(); i++) {
                Donation donation = donations.get(i);
                String items = joinItems(donation.getItems());
                writer.write(String.format("%s,%s,%s,%s\n", donation.getDonationId(), donation.getUsername(), donation.getCategory(), items));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String joinItems(Array<String> items) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < items.size(); i++) {
            if (i > 0) {
                sb.append("+");
            }
            sb.append(items.get(i));
        }
        return sb.toString();
    }

    private Array<String> splitItems(String itemsString) {
        String[] itemsArray = itemsString.split("\\+");
        Array<String> items = new ArrayList<>(itemsArray.length);
        for (String item : itemsArray) {
            items.add(item);
        }
        return items;
    }
}