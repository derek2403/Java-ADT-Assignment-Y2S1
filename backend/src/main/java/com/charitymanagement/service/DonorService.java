// File: src/main/java/com/charitymanagement/service/DonorService.java
package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Donor;

@Service
public class DonorService {

    private static final Logger logger = LoggerFactory.getLogger(DonorService.class);

    private LinkedList<Donor> donors = new LinkedList<>();

    @PostConstruct
    public void init() {
        loadDonorsFromFile();
    }

    public boolean createAccount(Donor donor) {
        logger.info("Attempting to create account for username: {}", donor.getUsername());
        if (donor.getUsername() == null || donor.getPassword() == null) {
            logger.error("Account creation failed: username or password is null");
            return false;
        }
        donors.add(donor);
        boolean success = saveToFile(donor);
        if (success) {
            logger.info("Account created successfully for username: {}", donor.getUsername());
        } else {
            logger.error("Failed to save account to file for username: {}", donor.getUsername());
        }
        return success;
    }

    public Donor signIn(String username, String password) {
        logger.info("Attempting to sign in user: {}", username);
        for (int i = 0; i < donors.size(); i++) {
            Donor donor = donors.get(i);
            if (donor.getUsername().equals(username) && donor.getPassword().equals(password)) {
                logger.info("Sign in successful for user: {}", username);
                return donor;
            }
        }
        logger.error("Sign in failed for user: {}", username);
        return null;
    }

    public boolean updateDetails(Donor updatedDonor) {
        logger.info("Attempting to update details for username: {}", updatedDonor.getUsername());
        for (int i = 0; i < donors.size(); i++) {
            Donor donor = donors.get(i);
            if (donor.getUsername().equals(updatedDonor.getUsername())) {
                donors.remove(donor);
                donors.add(updatedDonor);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Details updated successfully for username: {}", updatedDonor.getUsername());
                } else {
                    logger.error("Failed to update details in file for username: {}", updatedDonor.getUsername());
                }
                return success;
            }
        }
        logger.error("Update failed: user not found for username: {}", updatedDonor.getUsername());
        return false;
    }

    private boolean saveToFile(Donor donor) {
        try (FileWriter credentialsWriter = new FileWriter("credentials.txt", true);
             FileWriter detailsWriter = new FileWriter("donor_details.txt", true)) {

            credentialsWriter.write(donor.getUsername() + "," + donor.getPassword() + "\n");
            detailsWriter.write(String.format("%s,%s,%s,%d,%s,%s\n",
                    donor.getUsername(), donor.getName(), donor.getEmail(),
                    donor.getAge(), donor.getType(), donor.getCriteria()));

            return true;
        } catch (IOException e) {
            logger.error("Error saving donor to file", e);
            return false;
        }
    }

    private boolean updateFileData() {
        try (FileWriter credentialsWriter = new FileWriter("credentials.txt");
             FileWriter detailsWriter = new FileWriter("donor_details.txt")) {

            for (int i = 0; i < donors.size(); i++) {
                Donor donor = donors.get(i);
                credentialsWriter.write(donor.getUsername() + "," + donor.getPassword() + "\n");
                detailsWriter.write(String.format("%s,%s,%s,%d,%s,%s\n",
                        donor.getUsername(), donor.getName(), donor.getEmail(),
                        donor.getAge(), donor.getType(), donor.getCriteria()));
            }

            return true;
        } catch (IOException e) {
            logger.error("Error updating donor files", e);
            return false;
        }
    }

    public Donor searchDonor(String username) {
        logger.info("Searching for donor with username: {}", username);
        for (int i = 0; i < donors.size(); i++) {
            Donor donor = donors.get(i);
            if (donor.getUsername().equals(username)) {
                logger.info("Donor found: {}", donor.getUsername());
                return donor;
            }
        }
        logger.error("Donor not found for username: {}", username);
        return null;
    }

    public boolean deleteDonor(String username) {
        logger.info("Attempting to delete donor with username: {}", username);
        for (int i = 0; i < donors.size(); i++) {
            Donor donor = donors.get(i);
            if (donor.getUsername().equals(username)) {
                donors.remove(donor);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Donor deleted successfully: {}", username);
                } else {
                    logger.error("Failed to update files after deleting donor: {}", username);
                }
                return success;
            }
        }
        logger.error("Donor not found for deletion: {}", username);
        return false;
    }
    
    private void loadDonorsFromFile() {
        try (BufferedReader reader = new BufferedReader(new FileReader("donor_details.txt"))) {
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
            logger.error("Error loading donors from file", e);
        }

        try (BufferedReader reader = new BufferedReader(new FileReader("credentials.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    for (int i = 0; i < donors.size(); i++) {
                        Donor donor = donors.get(i);
                        if (donor.getUsername().equals(parts[0])) {
                            donor.setPassword(parts[1]);
                            break;
                        }
                    }
                }
            }
        } catch (IOException e) {
            logger.error("Error loading credentials from file", e);
        }

        logger.info("Loaded {} donors from file", donors.size());
    }
}