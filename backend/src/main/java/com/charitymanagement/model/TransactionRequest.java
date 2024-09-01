package com.charitymanagement.model;

public class TransactionRequest {
    private String donationId;
    private String requestId;

    // Getters and setters
    public String getDonationId() {
        return donationId;
    }

    public void setDonationId(String donationId) {
        this.donationId = donationId;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }
}