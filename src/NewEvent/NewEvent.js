import React from 'react';
import './NewEvent.css';
import { useState } from 'react';

const NewEvent = ({ submitEvent, setIsFormOpen, eventData, setEventData, onEventFormChange, isChecked, handleCheckBox }) => {
  const [error, setError] = useState(false);


  const checkFields = (e) => {
    e.preventDefault()
    if (eventData.name && eventData.date && eventData.time && eventData.description) {
      setError(false)
      setIsFormOpen(false)
      submitEvent()
    } else {
      setError(true)
      }
    }

  return (
    <div className="form-container">
    <button className="material-icons close-btn" onClick={() => setIsFormOpen(false)}>highlight_off</button>
      <form className="form">
        <label htmlFor="name" className="name-label">NAME <span>*</span></label>
        <input type="text" style={{width:300}} name="name" className="name-input" onChange={onEventFormChange}/>

        <label htmlFor="date" className="date-label">DATE <span>*</span></label>
        <input type="date" style={{width:300}} name="date" className="date-input" onChange={onEventFormChange}/>

        <label htmlFor="time" className="time-label">TIME <span>*</span></label>
        <input type="time" style={{width:300}} name="time" className="time-input" onChange={onEventFormChange}/>

        <label  htmlFor="adultRequired" className="yes-label">All Whole Village events default to require parent attendance. If this event does NOT require parent attendance, please check this box.</label>
        <input type="checkbox" name="adultRequired" value="false" className="yes-input" checked={isChecked} onChange={handleCheckBox} />

        <label htmlFor="description" className="description-label">DESCRIPTION <span>*</span></label>
        <input type="text" style={{height:100, width:300}} name="description" className="description-input" onChange={onEventFormChange} />

        <button onClick={e => checkFields(e)} className="submit-btn" style={{width:300}}>Submit
        </button>

        {!error && <p className="warning-msg"><span>*</span> Denotes required field.</p>}
        {error && <p className="error-msg">Required field missing! Please fill out all required field and re-submit.</p>}
      </form>
    </div>
  )
}

export default NewEvent;
