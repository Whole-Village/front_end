import React from 'react';
import './VillageHome.css'
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import { useState, useEffect } from 'react';
import { villagesQuery } from '../graphQL/queries/GetVillage';
import { useQuery, useMutation } from "@apollo/client";
import { createEvent } from '../graphQL/mutations/CreateEvent';


const VillageHome = ({ id, handleVillageChange, newVillage, addVillageMembers, villageFormOpen, setVillageFormOpen,addVillageDescription }) => {
  const [isFormOpen, setFormStatus] = useState(false)
  const [currentVillage, setCurrentVillage] = useState({})

  const { data } = useQuery(villagesQuery, {
    variables: {
      id }
    }
  );

  useEffect(() => {
    if(data) {
      setCurrentVillage(data.village)
    }
  }, [data])


  const showEventForm = () => {
    return (
      setFormStatus(true)
    )
  }

  const [mutateUser, { stuff, loading }] =  useMutation(createEvent)

  const submitForm = (event, value) => {
    event.preventDefault()
    mutateUser({
      variables: {
        name: value.name,
        description: value.description,
        date: value.date,
        time: value.time,
        adultRequired: value.adultRequired
      }
    })
    setFormStatus(false)
  }

  const closeForm = () => {
    setFormStatus(false)
  }

  return (
    <div className="village-home">
      <h2 className="village-name">Welcome to {currentVillage.name}!</h2>
      <div className="village-subheaders">
        <h3 className="events-sub">Village Events</h3>
        <h3 className="villagers-sub">Villagers</h3>
      </div>
      <div className="sub">
        {isFormOpen && <NewEvent sumbitForm={submitForm} closeForm={closeForm}/>}
        <div className="events">
          <Events villageId={id}/>
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
