package com.charitymanagement.model;

public class Transaction {
    private String transactionId;
    private String donorUsername;
    private String doneeUsername;
    private Donation donation;

    public Transaction(String transactionId, String donorUsername, String doneeUsername, Donation donation) {
        this.transactionId = transactionId;
        this.donorUsername = donorUsername;
        this.doneeUsername = doneeUsername;
        this.donation = donation;
    }

    // Getters and setters
    public String getTransactionId() { return transactionId; }
    public void setTransactionId(String transactionId) { this.transactionId = transactionId; }
    public String getDonorUsername() { return donorUsername; }
    public void setDonorUsername(String donorUsername) { this.donorUsername = donorUsername; }
    public String getDoneeUsername() { return doneeUsername; }
    public void setDoneeUsername(String doneeUsername) { this.doneeUsername = doneeUsername; }
    public Donation getDonation() { return donation; }
    public void setDonation(Donation donation) { this.donation = donation; }
}