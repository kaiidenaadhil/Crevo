// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>
        <h1>Welcome, John Doe</h1>
        <section>
          <h2>Your Created Content</h2>
          <ul>
            <li>Blog Post: SEO-Optimized Blog on AI</li>
            <li>Promo Video for Social Media</li>
          </ul>
        </section>

        <section>
          <h2>Your Purchased Content</h2>
          <ul>
            <li>Social Media Graphic Template</li>
          </ul>
        </section>

        <div>
          <h3>Create New Content</h3>
          <a href="/create/text">Create Text Content</a><br />
          <a href="/create/image">Create Image Content</a><br />
          <a href="/create/video">Create Video Content</a>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
