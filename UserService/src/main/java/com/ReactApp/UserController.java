package com.ReactApp;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")    
@Service
public class UserController {
   
	@Autowired
    private  UserRepository userRepository;

//    @PostMapping("/user")
//    public ResponseEntity<String> addUser(@RequestBody User user) {
//    	System.out.println(user);
//        userRepository.save(user);
//        return ResponseEntity.ok("User added successfully");
//    }
    
    @GetMapping("/show")
    public List<User> getAllUsers() {
//	System.out.println(userRepository.findAll().listIterator());
//    	 List<User> obj= userRepository.findAll();
//    	 for (User user : obj) {
//			System.out.println(user.toString());
//		}
    	return userRepository.findAll();
    	
    	
    }
        
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
       userRepository.deleteById(id);
    }
    
    @PutMapping("/{id}")
    public User updateUserById(@PathVariable Long id,@RequestBody User updatedUser) {
        // Retrieve the existing user from the database
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        // Update the user properties with the new values
        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setAge(updatedUser.getAge());
        existingUser.setDob(updatedUser.getDob());

        // Save and return the updated user
        return userRepository.save(existingUser);
    }
}
  
    
    




