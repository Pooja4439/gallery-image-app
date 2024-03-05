
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to My Gallery App</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
