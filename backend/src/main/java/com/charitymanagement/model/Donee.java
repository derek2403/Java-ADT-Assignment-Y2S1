package com.charitymanagement.model;

public class Donee {
    private String username;
    private String name;
    private String email;
    private int age;
    private String type;
    private String needs;
    private String password;

    public Donee() {
        // Default constructor
    }

    public Donee(String username, String name, String email, int age, String type, String needs, String password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.age = age;
        this.type = type;
        this.needs = needs;
        this.password = password;
    }
    // Getters and setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getNeeds() { return needs; }
    public void setNeeds(String needs) { this.needs = needs; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}