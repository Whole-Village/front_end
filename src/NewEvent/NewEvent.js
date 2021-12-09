import React from 'react';
import './NewEvent.css';
import { useState } from 'react';

const NewEvent = ({ submitForm, closeForm }) => {
  const[value, setValue] = useState({name: '', date: '', time: '', description: '', adultRequired: ''});
  const [error, setError] = useState(false)

  const onChange = (event) => {
    setValue({...value, [event.target.name]: event.target.value});
  };

  const checkFields = (event) => {
    event.preventDefault()
    if (value.name && value.date && value.time && value.description && value.adultRequired) {
      submitForm()
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
        <label className="adult-label">Is an adult required?</label>
        <label  htmlFor="adultRequired" className="yes-label">Yes</label>
        <input type="radio" name="adult" className="yes-input" onChange={onChange} value={true}/>
        <label  htmlFor="adultRequired" className="no-label">No</label>
        <input type="radio" name="adult" className="no-input" onChange={onChange} value={false}/>
        <label htmlFor="description" className="description-label">DESCRIPTION</label>
        <input type="text" style={{height:100, width:300}} name="description" className="description-input" onChange={onChange} />
        <input type="submit" onClick={checkFields} className="submit-btn" style={{width:300}} />
        {!error && <p className="warning-msg">Please complete all fields before clicking submit. Thank you!</p>}
        {error && <p className="error-msg">All fields are required to create an event. Please fill in missing information and submit again. Thank you!</p>}
      </form>
    </div>
  )
}

export default NewEvent;
