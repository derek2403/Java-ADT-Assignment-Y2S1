package com.charitymanagement.model;

public class DonationRequest {
    private String username;
    private String category;
    private String items;

    // Default constructor
    public DonationRequest() {}

    // Constructor with all fields
    public DonationRequest(String username, String category, String items) {
        this.username = username;
        this.category = category;
        this.items = items;
    }

    // Getters and setters
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

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }
}