// src/pages/CreateContent.js
import React from 'react';
import Navbar from '../components/Navbar';

const CreateContent = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Create Content</h1>
        <form>
          <label htmlFor="title">Content Title:</label>
          <input type="text" id="title" name="title" required /><br /><br />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required /><br /><br />

          <label htmlFor="tags">Tags (comma separated):</label>
          <input type="text" id="tags" name="tags" /><br /><br />

          <label htmlFor="style">Style of Content:</label>
          <select id="style" name="style">
            <option value="minimal">Minimalistic</option>
            <option value="vibrant">Vibrant</option>
            <option value="retro">Retro</option>
          </select><br /><br />

          <button type="submit">Generate Content</button>
        </form>
      </main>
    </div>
  );
}

export default CreateContent;
