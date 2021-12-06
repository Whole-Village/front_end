import React from 'react';
// import { Link } from 'react-router-dom';
import './VillageHome.css'
import NavVillageHome from '../NavVillageHome/NavVillageHome';
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import { villages } from '../Fixtures/Villages';
import { useState, useEffect } from 'react';

const VillageHome = ({ id }) => {
  const [isFormOpen, setFormStatus] = useState(false)
  const villageData = villages.filter((elem) => {
    return parseInt(elem.id) === 1})

  const showEventForm = () => {
    return (
      setFormStatus(true)
    )
  }

  const submitForm = (event) => {
    event.preventDefault()
    setFormStatus(false)
  }

  return (
    <div className="village-home">
      <NavVillageHome />
      <h2>Welcome to {villageData[0].name}!</h2>
      <div className="sub">
      {isFormOpen && <NewEvent />}
        <div className="events">
          <p>Upcoming Events</p>
          <button onClick={showEventForm}>Create a New Event</button>
          <Events sumitForm={submitForm}/>
        </div>
        <div className="villagers">
        </div>
        </div>
    </div>
  )
}

export default VillageHome;
