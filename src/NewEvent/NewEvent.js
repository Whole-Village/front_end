import React from 'react';
import './NewEvent.css';
import { useState } from 'react';

const NewEvent = ({ submitEvent, closeForm, eventData, setEventData, onChange, isChecked, handleCheckBox }) => {
  const [error, setError] = useState(false);


  const checkFields = (e) => {
    e.preventDefault()
    if (eventData.name && eventData.date && eventData.time && eventData.description) {
      setError(false)
      closeForm()
      submitEvent()
    } else {
      setError(true)
      }
    }

  return (
    <div className="form-container">
    <button className="close-form" onClick={closeForm}>x</button>
      <form className="form">
        <label htmlFor="name" className="name-label">NAME</label>
        <input type="text" style={{width:300}} name="name" className="name-input" onChange={onChange}/>

        <label htmlFor="date" className="date-label">DATE</label>
        <input type="date" style={{width:300}} name="date" className="date-input" onChange={onChange}/>

        <label htmlFor="time" className="time-label">TIME</label>
        <input type="time" style={{width:300}} name="time" className="time-input" onChange={onChange}/>

        <label  htmlFor="adultRequired" className="yes-label">All Whole Village events default to require parent attendance. If this event does NOT require parent attendance, please check this box.</label>
        <input type="checkbox" name="adultRequired" value="false" className="yes-input" checked={isChecked} onChange={handleCheckBox} />

        <label htmlFor="description" className="description-label">DESCRIPTION</label>
        <input type="text" style={{height:100, width:300}} name="description" className="description-input" onChange={onChange} />

        <button onClick={e => checkFields(e)} className="submit-btn" style={{width:300}}>Submit
        </button>

        {!error && <p className="warning-msg">Please complete all fields before clicking submit. Thank you!</p>}
        {error && <p className="error-msg">All fields are required to create an event. Please fill in missing information and submit again. Thank you!</p>}
      </form>
    </div>
  )
}

export default NewEvent;
