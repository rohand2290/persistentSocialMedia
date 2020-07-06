package com.De2290.persistentSocialMedia.API.DB;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "logins")
public class Login {
    @Id 
    private String id;
    
    private String username;
    private String password;



    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Login(String id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public Login() {

    }

     
}
