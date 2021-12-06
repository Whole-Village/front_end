import React from 'react';
// import { Link } from 'react-router-dom';
import './VillageHome.css'
import NavVillageHome from '../NavVillageHome/NavVillageHome';
import Events from '../Events/Events';
import { villages } from '../Fixtures/Villages';

const VillageHome = ({ id }) => {

  const villageData = villages.filter((elem) => {
    return parseInt(elem.id) === 1})

  return (
    <div className="village-home">
      <NavVillageHome />
      <h2>Welcome to {villageData[0].name}!</h2>
      <div className="sub">
        <div className="events">
          <p>Upcoming Events</p>
          <button>Create a New Event</button>
          <Events />
        </div>
        <div className="villagers">
        </div>
        </div>
    </div>
  )
}

export default VillageHome;
