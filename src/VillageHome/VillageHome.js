import React from 'react';
// import { Link } from 'react-router-dom';
import './VillageHome.css'
import NavVillageHome from '../NavVillageHome/NavVillageHome';
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import { villages } from '../Fixtures/Villages';
import { useState } from 'react';

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
      <div className="village-subheaders">
      <h3 className="events-sub">Village Events</h3>
      <h3 className="villagers-sub">Villagers</h3>
      </div>
      <div className="sub">
      {isFormOpen && <NewEvent />}
        <div className="events">
          <Events sumitForm={submitForm}/>
        </div>
        <div className="villagers">
        </div>
        </div>
        <div className="button-container">
        <button className="create-event" onClick={showEventForm}>Create a New Event</button>
        <button className="invite-new">Invite More Villagers</button>
        </div>
    </div>
  )
}

export default VillageHome;
