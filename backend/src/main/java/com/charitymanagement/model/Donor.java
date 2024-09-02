package com.charitymanagement.model;

public class Donor {
    private String username;
    private String name;
    private String email;
    private int age;
    private String type; // individual or organisation
    private String criteria;
    private String password;

    // No-args constructor
    public Donor() {
    }

    // Parameterized constructor
    public Donor(String username, String name, String email, int age, String type, String criteria, String password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.age = age;
        this.type = type;
        this.criteria = criteria;
        this.password = password;
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCriteria() {
        return criteria;
    }

    public void setCriteria(String criteria) {
        this.criteria = criteria;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
