// File: src/main/java/com/charitymanagement/model/Event.java
package com.charitymanagement.model;

import java.util.List;

public class Event {
    private String eventId;
    private String eventName;
    private String venue;
    private String time;
    private String date;
    private List<String> volunteers; // List of volunteer usernames

    // Constructors
    public Event() {}

    public Event(String eventId, String eventName, String venue, String time, String date, List<String> volunteers) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.venue = venue;
        this.time = time;
        this.date = date;
        this.volunteers = volunteers;
    }

    // Getters and Setters
    public String getEventId() { return eventId; }
    public void setEventId(String eventId) { this.eventId = eventId; }

    public String getEventName() { return eventName; }
    public void setEventName(String eventName) { this.eventName = eventName; }

    public String getVenue() { return venue; }
    public void setVenue(String venue) { this.venue = venue; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public List<String> getVolunteers() { return volunteers; }
    public void setVolunteers(List<String> volunteers) { this.volunteers = volunteers; }
}
