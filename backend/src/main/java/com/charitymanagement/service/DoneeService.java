package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.UUID;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donee;

@Service
public class DoneeService {
    private static final Logger logger = LoggerFactory.getLogger(DoneeService.class);

    private LinkedList<Donee> donees = new LinkedList<>();

    @PostConstruct
    public void init() {
        loadDoneesFromFile();
    }

    public boolean createAccount(Donee donee) {
        logger.info("Attempting to create account for username: {}", donee.getUsername());
        if (donee.getUsername() == null || donee.getPassword() == null) {
            logger.error("Account creation failed: username or password is null");
            return false;
        }
        donees.add(donee);
        boolean success = saveToFile(donee);
        if (success) {
            logger.info("Account created successfully for username: {}", donee.getUsername());
        } else {
            logger.error("Failed to save account to file for username: {}", donee.getUsername());
        }
        return success;
    }

    public Donee signIn(String username, String password) {
        logger.info("Attempting to sign in user: {}", username);
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            if (donee.getUsername().equals(username) && donee.getPassword().equals(password)) {
                logger.info("Sign in successful for user: {}", username);
                return donee;
            }
        }
        logger.error("Sign in failed for user: {}", username);
        return null;
    }

    public boolean updateDetails(Donee updatedDonee) {
        logger.info("Attempting to update details for username: {}", updatedDonee.getUsername());
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            if (donee.getUsername().equals(updatedDonee.getUsername())) {
                donees.remove(donee);
                donees.add(updatedDonee);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Details updated successfully for username: {}", updatedDonee.getUsername());
                } else {
                    logger.error("Failed to update details in file for username: {}", updatedDonee.getUsername());
                }
                return success;
            }
        }
        logger.error("Update failed: user not found for username: {}", updatedDonee.getUsername());
        return false;
    }

    public Donee searchDonee(String username) {
        logger.info("Searching for donee with username: {}", username);
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            if (donee.getUsername().equals(username)) {
                logger.info("Donee found: {}", donee.getUsername());
                return donee;
            }
        }
        logger.error("Donee not found for username: {}", username);
        return null;
    }

    public boolean deleteDonee(String username) {
        logger.info("Attempting to delete donee with username: {}", username);
        for (int i = 0; i < donees.size(); i++) {
            Donee donee = donees.get(i);
            if (donee.getUsername().equals(username)) {
                donees.remove(donee);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Donee deleted successfully: {}", username);
                } else {
                    logger.error("Failed to update files after deleting donee: {}", username);
                }
                return success;
            }
        }
        logger.error("Donee not found for deletion: {}", username);
        return false;
    }

    private boolean saveToFile(Donee donee) {
        try (FileWriter credentialsWriter = new FileWriter("donee_credentials.txt", true);
             FileWriter detailsWriter = new FileWriter("donee_details.txt", true)) {

            credentialsWriter.write(donee.getUsername() + "," + donee.getPassword() + "\n");
            detailsWriter.write(String.format("%s,%s,%s,%d,%s,%s\n",
                    donee.getUsername(), donee.getName(), donee.getEmail(),
                    donee.getAge(), donee.getType(), donee.getNeeds()));

            return true;
        } catch (IOException e) {
            logger.error("Error saving donee to file", e);
            return false;
        }
    }

    private boolean updateFileData() {
        try (FileWriter credentialsWriter = new FileWriter("donee_credentials.txt");
             FileWriter detailsWriter = new FileWriter("donee_details.txt")) {

            for (int i = 0; i < donees.size(); i++) {
                Donee donee = donees.get(i);
                credentialsWriter.write(donee.getUsername() + "," + donee.getPassword() + "\n");
                detailsWriter.write(String.format("%s,%s,%s,%d,%s,%s\n",
                        donee.getUsername(), donee.getName(), donee.getEmail(),
                        donee.getAge(), donee.getType(), donee.getNeeds()));
            }

            return true;
        } catch (IOException e) {
            logger.error("Error updating donee files", e);
            return false;
        }
    }

    private void loadDoneesFromFile() {
        try (BufferedReader reader = new BufferedReader(new FileReader("donee_details.txt"))) {
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
            logger.error("Error loading donees from file", e);
        }

        try (BufferedReader reader = new BufferedReader(new FileReader("donee_credentials.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    for (int i = 0; i < donees.size(); i++) {
                        Donee donee = donees.get(i);
                        if (donee.getUsername().equals(parts[0])) {
                            donee.setPassword(parts[1]);
                            break;
                        }
                    }
                }
            }
        } catch (IOException e) {
            logger.error("Error loading donee credentials from file", e);
        }

        logger.info("Loaded {} donees from file", donees.size());
    }

    public String requestDonation(String username, String category, String items) {
        logger.info("Attempting to create donation request for username: {}", username);
        String donationId = UUID.randomUUID().toString().substring(0, 8);
        try (FileWriter writer = new FileWriter("donation_requests.txt", true)) {
            writer.write(String.format("%s,%s,%s,%s\n", donationId, username, category, items));
            logger.info("Donation request created successfully for username: {} with donation ID: {}", username, donationId);
            return donationId;
        } catch (IOException e) {
            logger.error("Error saving donation request to file", e);
            return null;
        }
    }

    public boolean removeRequest(String requestId) {
        logger.info("Attempting to remove donation request with ID: {}", requestId);
        LinkedList<String> remainingRequests = new LinkedList<>();
        boolean found = false;

        try (BufferedReader reader = new BufferedReader(new FileReader("donation_requests.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (!parts[0].equals(requestId)) {
                    remainingRequests.add(line);
                } else {
                    found = true;
                }
            }
        } catch (IOException e) {
            logger.error("Error reading donation requests file", e);
            return false;
        }

        if (!found) {
            logger.error("Request with ID {} not found", requestId);
            return false;
        }

        try (FileWriter writer = new FileWriter("donation_requests.txt")) {
            for (int i = 0; i < remainingRequests.size(); i++) {
                writer.write(remainingRequests.get(i) + "\n");
            }
            logger.info("Donation request with ID {} removed successfully", requestId);
            return true;
        } catch (IOException e) {
            logger.error("Error updating donation requests file", e);
            return false;
        }
    }
}