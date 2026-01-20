package com.fin.demo.service;

import com.fin.demo.model.User;
import com.fin.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        // Hash the password before saving
        user.setPassword(hashPassword(user.getPassword()));
        userRepository.save(user);
    }

    private String hashPassword(String password) {
        // Implement password hashing logic
        return password; // Placeholder for actual hashing
    }
}