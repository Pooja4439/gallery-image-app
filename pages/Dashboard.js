
import React from 'react';
import AddImage from '../components/Image/AddImage';
import DisplayImages from '../components/Image/DisplayImages';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <AddImage />
      <DisplayImages />
    </div>
  );
}

export default Dashboard;
