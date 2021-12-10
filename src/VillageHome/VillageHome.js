import React from 'react';
import './VillageHome.css'
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import { villages } from '../Fixtures/Villages';
import { useState } from 'react';

const VillageHome = ({ villageId, handleVillageChange, newVillage, addVillageMembers, villageFormOpen, setVillageFormOpen,addVillageDescription, userVillages }) => {
  const [isFormOpen, setFormStatus] = useState(false)

  const currentVillage = userVillages.filter((village) => {
    return village.id === villageId})
    console.log(currentVillage[0].name)
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
      <h2 className="village-name">Welcome to {currentVillage[0].name}!</h2>
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
