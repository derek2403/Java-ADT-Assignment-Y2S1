package com.charitymanagement.model;

import com.charitymanagement.adt.Array;
import com.charitymanagement.adt.ArrayList;

public class Donation {
    private String donationId;
    private String username;
    private String category;
    private Array<String> items;

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

    public Array<String> getItems() {
        return items;
    }

    public void setItems(Array<String> items) {
        this.items = items;
    }
}