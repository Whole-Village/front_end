import React from 'react';
import './Dashboard.css'
import VillageContainer from '../VillageContainer/VillageContainer'
import Nav from '../Nav/Nav'

const Dashboard = () => {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Nav />
      <VillageContainer />
    </div>
  )
}

export default Dashboard;