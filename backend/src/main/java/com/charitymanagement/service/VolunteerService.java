package com.charitymanagement.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.UUID;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charitymanagement.adt.LinkedList;
import com.charitymanagement.model.Volunteer;

@Service
public class VolunteerService {
    private static final Logger logger = LoggerFactory.getLogger(VolunteerService.class);
    private static final String REGISTRATIONS_FILE = "eventregistrations.txt";
    private LinkedList<Volunteer> volunteers = new LinkedList<>();
    @Autowired
    private EventService eventService;
    @PostConstruct
    public void init() {
        loadVolunteersFromFile();
    }

    public String addVolunteer(Volunteer volunteer) {
        logger.info("Attempting to add volunteer with username: {}", volunteer.getUsername());
        String username = volunteer.getUsername();
        if (findVolunteerByUsername(username) == null) {
            volunteers.add(volunteer);
            boolean success = saveToFile(volunteer);
            if (success) {
                logger.info("Volunteer added successfully with username: {}", username);
            } else {
                logger.error("Failed to save volunteer to file with username: {}", username);
            }
            return username;
        } else {
            logger.error("Failed to add volunteer. Username already exists: {}", username);
            return null;
        }
    }

    public boolean updateVolunteer(Volunteer updatedVolunteer) {
        logger.info("Attempting to update volunteer with username: {}", updatedVolunteer.getUsername());
        for (int i = 0; i < volunteers.size(); i++) {
            Volunteer volunteer = volunteers.get(i);
            if (volunteer.getUsername().equals(updatedVolunteer.getUsername())) {
                volunteers.remove(volunteer);
                volunteers.add(updatedVolunteer);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Volunteer details updated successfully for username: {}", updatedVolunteer.getUsername());
                } else {
                    logger.error("Failed to update volunteer details in file for username: {}", updatedVolunteer.getUsername());
                }
                return success;
            }
        }
        logger.error("Update failed: volunteer not found for username: {}", updatedVolunteer.getUsername());
        return false;
    }

    public boolean deleteVolunteer(String username) {
        logger.info("Attempting to delete volunteer with username: {}", username);
        for (int i = 0; i < volunteers.size(); i++) {
            Volunteer volunteer = volunteers.get(i);
            if (volunteer.getUsername().equals(username)) {
                volunteers.remove(volunteer);
                boolean success = updateFileData();
                if (success) {
                    logger.info("Volunteer deleted successfully for username: {}", username);
                } else {
                    logger.error("Failed to update files after deleting volunteer: {}", username);
                }
                return success;
            }
        }
        logger.error("Volunteer not found for deletion with username: {}", username);
        return false;
    }

    public Volunteer findVolunteerByUsername(String username) {
        logger.info("Searching for volunteer with username: {}", username);
        for (int i = 0; i < volunteers.size(); i++) {
            Volunteer volunteer = volunteers.get(i);
            if (volunteer.getUsername().equals(username)) {
                logger.info("Volunteer found: {}", username);
                return volunteer;
            }
        }
        logger.error("Volunteer not found for username: {}", username);
        return null;
    }

    public Volunteer signIn(String username, String password) {
        logger.info("Attempting to sign in volunteer with username: {}", username);
        Volunteer volunteer = findVolunteerByUsername(username);
        if (volunteer != null && volunteer.getPassword().equals(password)) {
            logger.info("Sign in successful for volunteer: {}", username);
            return volunteer;
        } else {
            logger.error("Sign in failed for volunteer: {}", username);
            return null;
        }
    }

    private boolean saveToFile(Volunteer volunteer) {
        try (BufferedWriter credentialsWriter = new BufferedWriter(new FileWriter("volunteerpassword.txt", true));
             BufferedWriter detailsWriter = new BufferedWriter(new FileWriter("volunteer.txt", true))) {

            credentialsWriter.write(volunteer.getUsername() + "," + volunteer.getPassword());
            credentialsWriter.newLine();
            detailsWriter.write(String.format("%s,%s,%s,%d",
                    volunteer.getUsername(), volunteer.getName(), volunteer.getEmail(), volunteer.getAge()));
            detailsWriter.newLine();

            return true;
        } catch (IOException e) {
            logger.error("Error saving volunteer to file", e);
            return false;
        }
    }

    private boolean updateFileData() {
        try (BufferedWriter credentialsWriter = new BufferedWriter(new FileWriter("volunteerpassword.txt"));
             BufferedWriter detailsWriter = new BufferedWriter(new FileWriter("volunteer.txt"))) {

            for (int i = 0; i < volunteers.size(); i++) {
                Volunteer volunteer = volunteers.get(i);
                credentialsWriter.write(volunteer.getUsername() + "," + volunteer.getPassword());
                credentialsWriter.newLine();
                detailsWriter.write(String.format("%s,%s,%s,%d",
                        volunteer.getUsername(), volunteer.getName(), volunteer.getEmail(), volunteer.getAge()));
                detailsWriter.newLine();
            }

            return true;
        } catch (IOException e) {
            logger.error("Error updating volunteer files", e);
            return false;
        }
    }

    private void loadVolunteersFromFile() {
        try (BufferedReader detailsReader = new BufferedReader(new FileReader("volunteer.txt"));
             BufferedReader credentialsReader = new BufferedReader(new FileReader("volunteerpassword.txt"))) {

            String line;
            while ((line = detailsReader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 4) {
                    Volunteer volunteer = new Volunteer();
                    volunteer.setUsername(parts[0]);
                    volunteer.setName(parts[1]);
                    volunteer.setEmail(parts[2]);
                    volunteer.setAge(Integer.parseInt(parts[3]));
                    volunteers.add(volunteer);
                }
            }

            while ((line = credentialsReader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    for (int i = 0; i < volunteers.size(); i++) {
                        Volunteer volunteer = volunteers.get(i);
                        if (volunteer.getUsername().equals(parts[0])) {
                            volunteer.setPassword(parts[1]);
                            break;
                        }
                    }
                }
            }

            logger.info("Loaded {} volunteers from file", volunteers.size());
        } catch (IOException e) {
            logger.error("Error loading volunteers from file", e);
        }
    }
    public String registerForEvent(String username, String eventId) {
        logger.info("Attempting to register volunteer {} for event {}", username, eventId);
        
        if (!eventService.eventExists(eventId)) {
            logger.error("Event does not exist: {}", eventId);
            return null;
        }

        Volunteer volunteer = findVolunteerByUsername(username);
        if (volunteer == null) {
            logger.error("Volunteer does not exist: {}", username);
            return null;
        }

        String registrationId = generateRegistrationId();
        boolean success = saveRegistration(registrationId, eventId, username);

        if (success) {
            logger.info("Registration successful. RegistrationID: {}", registrationId);
            return registrationId;
        } else {
            logger.error("Failed to save registration");
            return null;
        }
    }

    private String generateRegistrationId() {
        return UUID.randomUUID().toString().substring(0, 8);
    }

    private boolean saveRegistration(String registrationId, String eventId, String username) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(REGISTRATIONS_FILE, true))) {
            writer.write(String.format("%s,%s,%s", registrationId, eventId, username));
            writer.newLine();
            return true;
        } catch (IOException e) {
            logger.error("Error saving registration to file", e);
            return false;
        }
    }
}
