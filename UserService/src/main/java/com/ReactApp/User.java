package com.ReactApp;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String name;
	    private String email;
	    private int age;
	    private String dob ;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		
		@Override
		public String toString() {
			return "User [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age + ", dob=" + dob + "]";
		}
		public String getDob() {
			return dob;
		}
		public void setDob(String dob) {
			this.dob = dob;
		}
	
	
	    
}
