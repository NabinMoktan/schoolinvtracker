import React, { useState } from 'react';
import { addSchool } from '../api/schoolApi'; // import your API helper

function AddSchool() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    ward: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSchool(formData);
      alert('School added successfully!');
      setFormData({ name: '', address: '', ward: '', latitude: '', longitude: '' });
      // Optionally, redirect or clear form here
    } catch (error) {
      console.error('Error adding school:', error);
      alert('Failed to add school.');
    }
  };

  return (
    <div>
      <h1>Add School Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="School Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="ward"
          placeholder="Ward"
          value={formData.ward}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          step="any"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          step="any"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add School</button>
      </form>
    </div>
  );
}

export default AddSchool;
