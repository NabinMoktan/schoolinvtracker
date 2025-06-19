import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>🏫 School Infrastructure Tracker</h1>
    <p><Link to="/add">➕ Add a School</Link></p>
    <p><Link to="/schools">📋 View School List</Link></p>
  </div>
);

export default Home;
