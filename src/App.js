import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Rentify</h1>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/properties">View Properties</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
