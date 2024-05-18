// PropertyList.js
import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from the backend server
    // Example: fetch('/api/properties')
    // Replace '/api/properties' with your actual endpoint for fetching properties
    // Handle success/failure response from the server
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties'); // Adjust the API endpoint
        if (response.ok) {
          const data = await response.json();
          setProperties(data.properties);
        } else {
          throw new Error('Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: {property.price}</p>
            {/* Add more property details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
