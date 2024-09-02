package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donee;
import com.charitymanagement.model.Donor;

@Service
public class AdminService {

    private static final String DONEES_FILE = "donee_details.txt";
    private static final String DONORS_FILE = "donor_details.txt";
    private static final String DONATIONS_FILE = "donation.txt";
    private static final String DONATION_REQUESTS_FILE = "donation_requests.txt";
    private static final String TRANSACTIONS_FILE = "transaction.txt";

    // List Donees based on criteria and type
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

    // List Donors based on criteria and type
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

    
    // Create a new transaction
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

    // Generate a report of donors
    public LinkedList<String> generateDonorReport() {
        LinkedList<String> report = new LinkedList<>();
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

    // Generate a report of donees
    public LinkedList<String> generateDoneeReport() {
        LinkedList<String> report = new LinkedList<>();
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

    // Generate a report of transactions
    public LinkedList<LinkedList<String>> generateTransactionReport() {
        LinkedList<LinkedList<String>> report = new LinkedList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(TRANSACTIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    LinkedList<String> transaction = new LinkedList<>();
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

    // Generate a report of donation items
    public LinkedList<LinkedList<String>> generateDonationItemReport() {
        LinkedList<LinkedList<String>> report = new LinkedList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATIONS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    LinkedList<String> donationItem = new LinkedList<>();
                    donationItem.add("DonationId: " + parts[0]);
                    donationItem.add("ItemId: " + parts[1]);
                    donationItem.add("Quantity: " + parts[2]);
                    donationItem.add("DateTime: " + parts[3]);
                    report.add(donationItem);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    // Generate a report of donation requests
    public LinkedList<LinkedList<String>> generateDonationRequestReport() {
        LinkedList<LinkedList<String>> report = new LinkedList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(DONATION_REQUESTS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    LinkedList<String> donationRequest = new LinkedList<>();
                    donationRequest.add("RequestId: " + parts[0]);
                    donationRequest.add("ItemId: " + parts[1]);
                    donationRequest.add("Quantity: " + parts[2]);
                    donationRequest.add("DateTime: " + parts[3]);
                    report.add(donationRequest);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return report;
    }

    // Read donees from the file
    private LinkedList<Donee> readDonees() {
        LinkedList<Donee> donees = new LinkedList<>();
    
        try (BufferedReader reader = new BufferedReader(new FileReader(DONEES_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 7) {
                    String username = parts[0];
                    String name = parts[1];
                    String email = parts[2];
                    int age = Integer.parseInt(parts[3]);
                    String type = parts[4];
                    String needs = parts[5];
                    String password = parts[6];
    
                    Donee donee = new Donee(username, name, email, age, type, needs, password);
                    donees.add(donee);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    
        return donees;
    }
    

    // Read donors from the file
    private LinkedList<Donor> readDonors() {
        LinkedList<Donor> donors = new LinkedList<>();
    
        try (BufferedReader reader = new BufferedReader(new FileReader(DONORS_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 7) {
                    String username = parts[0];
                    String name = parts[1];
                    String email = parts[2];
                    int age = Integer.parseInt(parts[3]);
                    String type = parts[4];
                    String criteria = parts[5];
                    String password = parts[6];
    
                    Donor donor = new Donor(username, name, email, age, type, criteria, password);
                    donors.add(donor);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    
        return donors;
    }
    
}
