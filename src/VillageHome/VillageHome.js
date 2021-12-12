import { useState, useEffect } from 'react';
import './VillageHome.css'
import VillageMembers from '../VillageMembers/VillageMembers';
import Events from '../Events/Events';
import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import { villagesQuery } from '../graphQL/queries/GetVillage';
import { useQuery, useMutation } from "@apollo/client";
import { createEvent } from '../graphQL/mutations/CreateEvent';


const VillageHome = ({ id, handleVillageChange, newVillage, setNewVillage, addVillageMembers, villageFormOpen, setVillageFormOpen,addVillageDescription, postNewVillage }) => {
  const [isFormOpen, setFormStatus] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [currentVillage, setCurrentVillage] = useState({})
  const [villageMembers, setVillageMembers] = useState([])
  const [villageEvents, setVillageEvents] = useState([]);
  const[eventData, setEventData] = useState({name: '', date: '', time: '', description: '', adultRequired: true});
  const [newEvent, { error, loading }] =  useMutation(createEvent)
  const { data } = useQuery(villagesQuery, {
    variables: {
      id }
    }
  );
  useEffect(() => {
    if(data) {
      setCurrentVillage(data.village)
    }
    //we need to do loading/error handling here
    if(loading) {
      console.log('...loading')
    }
    if(error) {
      console.log(error)
    }
  }, [data, error, loading])


  const showEventForm = () => {
    return (
      setFormStatus(true)
    )
  }


  const submitEvent = () => {
    console.log(eventData.date)
    newEvent({
      variables: {
        villageId: id,
        name: eventData.name,
        description: eventData.description,
        date: eventData.date,
        time: eventData.time,
        adultRequired: eventData.adultRequired
      }
    })
    setVillageEvents([...villageEvents, eventData])
  }

  const handleCheckBox = (e) => {
      setIsChecked(!isChecked);
      onEventFormChange(e)
}

  const onEventFormChange = (e) => {
    if (e.target.name === 'adultRequired' && isChecked) {
      setEventData({...eventData, [e.target.name]: isChecked})
    } else if (e.target.name === 'adultRequired' && !isChecked) {
      setEventData({...eventData, [e.target.name]: isChecked})
    } else {
      setEventData({...eventData, [e.target.name]: e.target.value});
    }
  };

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
        {isFormOpen && <NewEvent
          closeForm={closeForm}
          eventData={eventData}
          setEventData={setEventData}
          onEventFormChange={onEventFormChange}
          submitEvent={submitEvent}
          isChecked={isChecked}
          handleCheckBox={handleCheckBox}
          />}
        <div className="events">
          <Events
          villageId={id}
          villageEvents={villageEvents}
          setVillageEvents={setVillageEvents}
          />
        </div>
        <div className="villagers">
          <VillageMembers
            villageId={id}
            setVillageMembers={setVillageMembers}
            villageMembers={villageMembers}
          />
        </div>
        {villageFormOpen && <NewVillageForm
          handleVillageChange={handleVillageChange}
          newVillage={newVillage}
          setNewVillage={setNewVillage}
          addVillageMembers={addVillageMembers}
          setVillageFormOpen={setVillageFormOpen}
          addVillageDescription={addVillageDescription}
          postNewVillage={postNewVillage}
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
