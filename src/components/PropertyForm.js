// PropertyForm.js
import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send property data to the backend server
    // Example: fetch('/api/properties', { method: 'POST', body: JSON.stringify(formData) })
    // Replace '/api/properties' with your actual endpoint for adding properties
    // Handle success/failure response from the server
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      title: '',
      location: '',
      price: '',
      // Clear other fields as needed
    });
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        {/* Add more input fields for other property details */}
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default PropertyForm;
