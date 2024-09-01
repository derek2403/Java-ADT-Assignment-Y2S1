package com.charitymanagement.model;

import com.charitymanagement.adt.LinkedList;

public class Volunteer {
    private String username;
    private String name;
    private int age;
    private String email;
    private String password;
    private LinkedList<String> events;

    // Constructor
    public Volunteer(String username, String name, int age, String email, String password) {
        this.username = username;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.events = new LinkedList<>();
    }

    // No-args constructor
    public Volunteer() {
        this.username = "";
        this.name = "";
        this.age = 0;
        this.email = "";
        this.password = "";
        this.events = new LinkedList<>();
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LinkedList<String> getEvents() {
        return events;
    }

    public void setEvents(LinkedList<String> events) {
        this.events = events;
    }
}
