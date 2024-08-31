package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donation;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;
import com.charitymanagement.model.Transaction;

@Service
public class AdminService {

    private static final String DONEES_FILE = "donees.txt";
    private static final String DONATIONS_FILE = "donations.txt";
    private static final String TRANSACTIONS_FILE = "transactions.txt";
    private static final String DONORS_FILE = "donors.txt";

    public LinkedList<Donee> listDonees(String criteria, String type) {
        LinkedList<Donee> allDonees = readDonees();
        LinkedList<Donee> filteredDonees = new LinkedList<>();

        for (int i = 0; i < allDonees.size(); i++) {
            Donee donee = allDonees.get(i);
            if ((criteria == null || donee.getNeeds().contains(criteria)) &&
                (type == null || donee.getType().equals(type))) {
                filteredDonees.add(donee);
            }
        }

        return filteredDonees;
    }

    public LinkedList<Donor> listDonors(String criteria, String type) {
        LinkedList<Donor> allDonors = readDonors();
        LinkedList<Donor> filteredDonors = new LinkedList<>();
    
        for (int i = 0; i < allDonors.size(); i++) {
            Donor donor = allDonors.get(i);
            if ((criteria == null || donor.getCriteria().contains(criteria)) &&
                (type == null || donor.getType().equals(type))) {
                filteredDonors.add(donor);
            }
        }
    
        return filteredDonors;
    }

    public String executeDonation(String doneeId, String donationId) {
        Donation donation = findAndRemoveDonation(donationId);
        Donee donee = findDonee(doneeId);

        if (donation != null && donee != null) {
            String transactionId = UUID.randomUUID().toString().substring(0, 8);
            Transaction transaction = new Transaction(transactionId, donation.getUsername(), doneeId, donation);
            saveTransaction(transaction);
            return transactionId;
        }

        return null;
    }

    public LinkedList<Map<String, String>> generateReport(String type) {
        switch (type.toLowerCase()) {
            case "donee":
                return generateDoneeReport();
            case "donor":
                return generateDonorReport();
            case "donation":
                return generateDonationReport();
            case "distribution":
                return generateDistributionReport();
            default:
                return new LinkedList<>();
        }
    }

    private LinkedList<Donee> readDonees() {
        LinkedList<Donee> donees = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONEES_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 6) {
                    Donee donee = new Donee();
                    donee.setUsername(parts[0]);
                    donee.setName(parts[1]);
                    donee.setEmail(parts[2]);
                    donee.setAge(Integer.parseInt(parts[3]));
                    donee.setType(parts[4]);
                    donee.setNeeds(parts[5]);
                    donees.add(donee);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return donees;
    }

    private LinkedList<Donor> readDonors() {
        LinkedList<Donor> donors = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONORS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 6) {
                    Donor donor = new Donor();
                    donor.setUsername(parts[0]);
                    donor.setName(parts[1]);
                    donor.setEmail(parts[2]);
                    donor.setAge(Integer.parseInt(parts[3]));
                    donor.setType(parts[4]);
                    donor.setCriteria(parts[5]);
                    donors.add(donor);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return donors;
    }

    private Donation findAndRemoveDonation(String donationId) {
        LinkedList<Donation> donations = readDonations();
        for (int i = 0; i < donations.size(); i++) {
            Donation donation = donations.get(i);
            if (donation.getDonationId().equals(donationId)) {
                donations.remove(donation);
                writeDonations(donations);
                return donation;
            }
        }
        return null;
    }

    private Donee findDonee(String doneeId) {
        LinkedList<Donee> donees = readDonees();
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            if (donee.getUsername().equals(doneeId)) {
                return donee;
            }
        }
        return null;
    }

    private void saveTransaction(Transaction transaction) {
        try (FileWriter writer = new FileWriter(TRANSACTIONS_FILE, true)) {
            writer.write(String.format("%s,%s,%s,%s,%s,%s\n",
                    transaction.getTransactionId(),
                    transaction.getDonorUsername(),
                    transaction.getDoneeUsername(),
                    transaction.getDonation().getDonationId(),
                    transaction.getDonation().getCategory(),
                    String.join("+", transaction.getDonation().getItems())));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private LinkedList<Donation> readDonations() {
        LinkedList<Donation> donations = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
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
        try (FileWriter writer = new FileWriter(DONATIONS_FILE)) {
            for (int i = 0; i < donations.size(); i++) {
                Donation donation = donations.get(i);
                writer.write(String.format("%s,%s,%s,%s\n",
                        donation.getDonationId(),
                        donation.getUsername(),
                        donation.getCategory(),
                        String.join("+", donation.getItems())));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private LinkedList<Map<String, String>> generateDoneeReport() {
        LinkedList<Map<String, String>> report = new LinkedList<>();
        LinkedList<Donee> donees = readDonees();
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            Map<String, String> row = new HashMap<>();
            row.put("Username", donee.getUsername());
            row.put("Name", donee.getName());
            row.put("Email", donee.getEmail());
            row.put("Age", String.valueOf(donee.getAge()));
            row.put("Type", donee.getType());
            row.put("Needs", donee.getNeeds());
            report.add(row);
        }
        return report;
    }

    private LinkedList<Map<String, String>> generateDonorReport() {
        LinkedList<Map<String, String>> report = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(DONORS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 6) {
                    Map<String, String> row = new HashMap<>();
                    row.put("Username", parts[0]);
                    row.put("Name", parts[1]);
                    row.put("Email", parts[2]);
                    row.put("Age", parts[3]);
                    row.put("Type", parts[4]);
                    row.put("Criteria", parts[5]);
                    report.add(row);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return report;
    }

    private LinkedList<Map<String, String>> generateDonationReport() {
        LinkedList<Map<String, String>> report = new LinkedList<>();
        LinkedList<Donation> donations = readDonations();
        for (int i = 0; i < donations.size(); i++) {
            Donation donation = donations.get(i);
            Map<String, String> row = new HashMap<>();
            row.put("Donation ID", donation.getDonationId());
            row.put("Donor", donation.getUsername());
            row.put("Category", donation.getCategory());
            row.put("Items", String.join(", ", donation.getItems()));
            report.add(row);
        }
        return report;
    }

    private LinkedList<Map<String, String>> generateDistributionReport() {
        LinkedList<Map<String, String>> report = new LinkedList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(TRANSACTIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 6) {
                    Map<String, String> row = new HashMap<>();
                    row.put("Transaction ID", parts[0]);
                    row.put("Donor", parts[1]);
                    row.put("Donee", parts[2]);
                    row.put("Donation ID", parts[3]);
                    row.put("Category", parts[4]);
                    row.put("Items", parts[5].replace("+", ", "));
                    report.add(row);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return report;
    }
}