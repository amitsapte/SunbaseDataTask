package com.ReactApp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
		
		
//		UserController us=new UserController();
//		us.getAllUsers();
		
	System.out.println("successfull");
	}
	
//    @Bean
//    public CommandLineRunner demo(UserController userService) {
//    	userService.getAllUsers();
//    	return null;
//        return args -> {
//        	User user=new User();
//    		user.setAge(10);
//    		user.setDate("10/12/1999");
//    		user.setEmail("amit@gmail.com");
//    		user.setName("amit");
//    	
			// Call the addUser() method here
//            System.out.println(  userService.add(user));
//            userService.addUser("Alice Smith", "alice@example.com");

            // You can add more calls to addUser() or any other logic here if needed
//        };
    	
    	
//    }
}



