import React from 'react';
import './VillageHome.css'
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import { useState, useEffect } from 'react';
import { eventsQuery } from '../graphQL/queries/GetEvents';
import { useQuery } from "@apollo/client";

const VillageHome = ({ villageId, handleVillageChange, newVillage, addVillageMembers, villageFormOpen, setVillageFormOpen,addVillageDescription }) => {
  const [isFormOpen, setFormStatus] = useState(false)
  const [events, setEvents] = useState([]);
  const { data } = useQuery(eventsQuery, {
    variables: {
      villageId }
    }
  );

  useEffect(() => {
    if(data) {
      setEvents(data)
    }
  }, [data])


  const showEventForm = () => {
    return (
      setFormStatus(true)
    )
  }

  const submitForm = (event) => {
    event.preventDefault()
    setFormStatus(false)
  }

  const closeForm = () => {
    setFormStatus(false)
  }

  return (
    <div className="village-home">
      <h2 className="village-name">Welcome to !</h2>
      <div className="village-subheaders">
        <h3 className="events-sub">Village Events</h3>
        <h3 className="villagers-sub">Villagers</h3>
      </div>
      <div className="sub">
        {isFormOpen && <NewEvent sumitForm={submitForm} closeForm={closeForm}/>}
        <div className="events">
          <Events />
        </div>
        <div className="villagers">
        </div>
        {villageFormOpen && <NewVillageForm
          handleVillageChange={handleVillageChange}
          newVillage={newVillage}
          addVillageMembers={addVillageMembers}
          setVillageFormOpen={setVillageFormOpen}
          addVillageDescription={addVillageDescription}
        />}
      </div>
      <div className="button-container">
        <button className="create-event" onClick={showEventForm}>Create a New Event</button>
        <button className="invite-new">Invite More Villagers</button>
      </div>
    </div>
  )
}

export default VillageHome;
