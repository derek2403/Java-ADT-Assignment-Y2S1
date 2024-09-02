package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.Array;
import com.charitymanagement.adt.ArrayList;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;

@Service
public class AdminService {

    private static final String DONEES_FILE = "donee_details.txt";
    private static final String DONORS_FILE = "donor_details.txt";
    private static final String DONATIONS_FILE = "donation.txt";
    private static final String DONATION_REQUESTS_FILE = "donation_requests.txt";
    private static final String TRANSACTIONS_FILE = "transaction.txt";

    public Array<Donee> listDonees(String criteria, String type) {
        Array<Donee> allDonees = readDonees();
        Array<Donee> filteredDonees = new ArrayList<>();

        for (int i = 0; i < allDonees.size(); i++) {
            Donee donee = allDonees.get(i);
            if ((criteria == null || donee.getNeeds().contains(criteria)) &&
                (type == null || donee.getType().equals(type))) {
                filteredDonees.add(donee);
            }
        }

        return filteredDonees;
    }

    public Array<Donor> listDonors(String criteria, String type) {
        Array<Donor> allDonors = readDonors();
        Array<Donor> filteredDonors = new ArrayList<>();

        for (int i = 0; i < allDonors.size(); i++) {
            Donor donor = allDonors.get(i);
            if ((criteria == null || donor.getCriteria().contains(criteria)) &&
                (type == null || donor.getType().equals(type))) {
                filteredDonors.add(donor);
            }
        }

        return filteredDonors;
    }

    public String createTransaction(String donationId, String requestId) {
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

    public Array<String> generateDonorReport() {
        Array<String> report = new ArrayList<>();
        int total = 0;
        int individual = 0;
        int organisation = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(DONORS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 5) {
                    total++;
                    if (parts[4].equalsIgnoreCase("individual")) {
                        individual++;
                    } else if (parts[4].equalsIgnoreCase("organisation")) {
                        organisation++;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        report.add("Total: " + total);
        report.add("Individual: " + individual);
        report.add("Organisation: " + organisation);

        return report;
    }

    public Array<String> generateDoneeReport() {
        Array<String> report = new ArrayList<>();
        int total = 0;
        int individual = 0;
        int organisation = 0;
        int family = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(DONEES_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 5) {
                    total++;
                    if (parts[4].equalsIgnoreCase("individual")) {
                        individual++;
                    } else if (parts[4].equalsIgnoreCase("organisation")) {
                        organisation++;
                    } else if (parts[4].equalsIgnoreCase("family")) {
                        family++;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        report.add("Total: " + total);
        report.add("Individual: " + individual);
        report.add("Organisation: " + organisation);
        report.add("Family: " + family);

        return report;
    }

    public Array<Array<String>> generateTransactionReport() {
        Array<Array<String>> report = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(TRANSACTIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    Array<String> transaction = new ArrayList<>();
                    transaction.add("TransactionId: " + parts[0]);
                    transaction.add("DonationId: " + parts[1]);
                    transaction.add("RequestId: " + parts[2]);
                    transaction.add("DateTime: " + parts[3]);
                    report.add(transaction);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public Array<Array<String>> generateDonationItemReport() {
        Array<Array<String>> report = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    String category = parts[2];
                    String[] items = parts[3].split("\\+");
                    Array<String> categoryItems = new ArrayList<>();
                    categoryItems.add("Category: " + category);
                    for (String item : items) {
                        categoryItems.add(item);
                    }
                    report.add(categoryItems);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    public Array<Array<String>> generateDonationRequestReport() {
        Array<Array<String>> report = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATION_REQUESTS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    String category = parts[2];
                    String[] items = parts[3].split("\\+");
                    Array<String> categoryItems = new ArrayList<>();
                    categoryItems.add("Category: " + category);
                    for (String item : items) {
                        categoryItems.add(item);
                    }
                    report.add(categoryItems);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    private Array<Donee> readDonees() {
        Array<Donee> donees = new ArrayList<>();
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

    private Array<Donor> readDonors() {
        Array<Donor> donors = new ArrayList<>();
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