import React, { useState, useEffect } from 'react';
import './show.css';


const Show = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateData, setUpdateData] = useState({ name: '', email: '', age: '', dob: '' });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    // Set the initial form data to the selected user's data
    setUpdateData({ name: user.name, email: user.email, age: user.age, dob: user.dob });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the user's data
      const response = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        // Update the users state with the updated user data
        setUsers(prevUsers => prevUsers.map(user => (user.id === selectedUser.id ? { ...user, ...updateData } : user)));
        setSelectedUser(null);
        // Clear the form data
        setUpdateData({ name: '', email: '', age: '', dob: '' });
      } else {
        console.error('Error updating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API endpoint for the specific user ID
      await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });

      // Update the users state by removing the deleted user
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container">
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Date of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                 <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.dob}$</td>
              <td ><button onClick={handleDelete(user.id)}></button></td>
              </tr>
                <td>
                  <button onClick={() => handleUpdateClick(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedUser && (
        <div className="update-form">
          <h2>Update User</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label>Name:</label>
            <input type="text" value={updateData.name} onChange={e => setUpdateData({ ...updateData, name: e.target.value })} />

            <label>Email:</label>
            <input type="email" value={updateData.email} onChange={e => setUpdateData({ ...updateData, email: e.target.value })} />

            <label>Age:</label>
            <input type="number" value={updateData.age} onChange={e => setUpdateData({ ...updateData, age: e.target.value })} />

            <label>Date of Birth:</label>
            <input type="date" value={updateData.dob} onChange={e => setUpdateData({ ...updateData, dob: e.target.value })} />

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Show;
