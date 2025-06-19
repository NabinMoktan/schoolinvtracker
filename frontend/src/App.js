import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Index';
import AddSchool from './pages/AddSchool';
import SchoolList from './pages/SchoolList';
import SchoolDetail from './pages/SchoolDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSchool />} />
        <Route path="/schools" element={<SchoolList />} />
        <Route path="/schools/:id" element={<SchoolDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
