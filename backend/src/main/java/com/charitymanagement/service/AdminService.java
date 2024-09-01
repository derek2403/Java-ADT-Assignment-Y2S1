package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donation;
import com.charitymanagement.model.DonationRequest;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;

@Service
public class AdminService {

    private static final String DONEES_FILE = "donee_details.txt";
    private static final String DONORS_FILE = "donor_details.txt";
    private static final String DONATIONS_FILE = "donation.txt";
    private static final String DONATION_REQUESTS_FILE = "donation_requests.txt";
    private static final String TRANSACTIONS_FILE = "transaction.txt";

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

    public String executeDonation(String donationId, String requestId) {
        String transactionId = UUID.randomUUID().toString().substring(0, 8);
        LocalDateTime now = LocalDateTime.now();
        String dateTime = now.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);

        try (FileWriter writer = new FileWriter(TRANSACTIONS_FILE, true)) {
            writer.write(String.format("%s,%s,%s,%s\n", transactionId, donationId, requestId, dateTime));
            return transactionId;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public Map<String, Integer> generateDonorReport() {
        Map<String, Integer> report = new HashMap<>();
        report.put("total", 0);
        report.put("individual", 0);
        report.put("organisation", 0);

        try (BufferedReader reader = new BufferedReader(new FileReader(DONORS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 5) {
                    report.put("total", report.get("total") + 1);
                    if (parts[4].equalsIgnoreCase("individual")) {
                        report.put("individual", report.get("individual") + 1);
                    } else if (parts[4].equalsIgnoreCase("organisation")) {
                        report.put("organisation", report.get("organisation") + 1);
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public Map<String, Integer> generateDoneeReport() {
        Map<String, Integer> report = new HashMap<>();
        report.put("total", 0);
        report.put("individual", 0);
        report.put("organisation", 0);
        report.put("family", 0);

        try (BufferedReader reader = new BufferedReader(new FileReader(DONEES_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 5) {
                    report.put("total", report.get("total") + 1);
                    if (parts[4].equalsIgnoreCase("individual")) {
                        report.put("individual", report.get("individual") + 1);
                    } else if (parts[4].equalsIgnoreCase("organisation")) {
                        report.put("organisation", report.get("organisation") + 1);
                    } else if (parts[4].equalsIgnoreCase("family")) {
                        report.put("family", report.get("family") + 1);
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public LinkedList<Map<String, String>> generateTransactionReport() {
        LinkedList<Map<String, String>> report = new LinkedList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(TRANSACTIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    Map<String, String> transaction = new HashMap<>();
                    transaction.put("transactionId", parts[0]);
                    transaction.put("donationId", parts[1]);
                    transaction.put("requestId", parts[2]);
                    transaction.put("dateTime", parts[3]);
                    report.add(transaction);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public Map<String, LinkedList<String>> generateDonationItemReport() {
        Map<String, LinkedList<String>> report = new HashMap<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    String category = parts[2];
                    String[] items = parts[3].split("\\+");
                    if (!report.containsKey(category)) {
                        report.put(category, new LinkedList<>());
                    }
                    for (String item : items) {
                        if (!report.get(category).contains(item)) {
                            report.get(category).add(item);
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public Map<String, LinkedList<String>> generateDonationRequestReport() {
        Map<String, LinkedList<String>> report = new HashMap<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATION_REQUESTS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    String category = parts[2];
                    String[] items = parts[3].split("\\+");
                    if (!report.containsKey(category)) {
                        report.put(category, new LinkedList<>());
                    }
                    for (String item : items) {
                        if (!report.get(category).contains(item)) {
                            report.get(category).add(item);
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
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
}