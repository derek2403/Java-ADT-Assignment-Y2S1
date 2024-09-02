package com.charitymanagement.model;

import java.util.ArrayList;
import java.util.List;

public class Donation {
    private String donationId;
    private String username;
    private String category;
    private List<String> items;

    public Donation() {
        this.items = new ArrayList<>();
    }

    // Getters and setters

    public String getDonationId() {
        return donationId;
    }

    public void setDonationId(String donationId) {
        this.donationId = donationId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getItems() {
        return items;
    }

    public void setItems(List<String> items) {
        this.items = items;
    }

    // Method to add a siitem t the items 

    public void addItem
(String item) {
        this.items.add(item);
    }

    @Override
    public String toString() {
        return "Donation{" +
                "donationId='" + donationId + '\'' +
                ", username='" + username + '\'' +
                ", category='" + category + '\'' +
                ", items=" + items +
                '}';
    }
}
