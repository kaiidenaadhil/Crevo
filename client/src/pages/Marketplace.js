// src/pages/Marketplace.js
import React from 'react';
import Navbar from '../components/Navbar';

const Marketplace = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Marketplace</h1>
        <section>
          <h2>Featured Content</h2>
          <div>
            <h3>Social Media Graphics - $50</h3>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>SEO Blog Post - $100</h3>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>Explainer Video - $200</h3>
            <button>Add to Cart</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Marketplace;
