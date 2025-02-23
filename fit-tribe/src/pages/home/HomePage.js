import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Fit Tribe Home</h1>
      {/* Other content */}
      <Link to="/new-workout">
        <button type="button">Add New Workout</button>
      </Link>
    </div>
  );
}

export default HomePage;
