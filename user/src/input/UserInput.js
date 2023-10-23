import React, { useState } from 'react';
import './UserInput.css';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dob: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    const ageInt = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageInt) || ageInt <= 0) {
      newErrors.age = 'Age must be a positive integer';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('/api/users/user ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
         console.log('Form data sent successfully to the server:', formData);
          // Clear the form after successful submission
          setFormData({
            name: '',
            email: '',
            age: '',
            dob: '',
          });
        } else {
          console.error('Error sending form data to the server.');
        }
      } catch (error) {
        console.error('Error sending form data:', error);
      }
    } else {
      // Form data is invalid, update the state with errors
      setErrors(newErrors);
    }
  };

 


  return (
    <div className="container">
      <h1>User Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          {errors.dob && <div className="error">{errors.dob}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
