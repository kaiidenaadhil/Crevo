// src/pages/Profile.js
import React from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>User Profile</h1>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" value="John Doe" required /><br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value="john@example.com" required /><br /><br />

          <label htmlFor="password">Change Password:</label>
          <input type="password" id="password" name="password" /><br /><br />

          <button type="submit">Update Profile</button>
        </form>
      </main>
    </div>
  );
}

export default Profile;
