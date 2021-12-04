import React from 'react';
import './NewEvent.css';
import { useEffect, useState } from 'react';

const NewEvent = () => {
  const[value, setValue] = useState({name: '', date: '', time: '', description: '', adultRequired: ''});
  const onChange = (event) => {
    setValue({...value, [event.target.name]: event.target.value});
  };
  return (
    <div className="form-container">
      <form className="form">
          <label htmlFor="name">Event Name:</label>
          <input type="text" style={{width:150}} name="name" onChange={onChange} />
          <label htmlFor="date">Event Date:</label>
          <input type="date" style={{width:150}} name="date" onChange={onChange} />
          <label htmlFor="time">Event Time:</label>
          <input type="time" style={{width:150}} name="time" onChange={onChange} />
          <label htmlFor="description">Event Description:</label>
          <input type="text" style={{height:100, width:300}} name="description" onChange={onChange} />
          <label>Is an adult required?</label>
          <div>
            <label  htmlFor="adultRequired">Yes</label>
            <input type="radio" name="adult" onChange={onChange} value={true} />
            <label  htmlFor="adultRequired">No</label>
            <input type="radio" name="adult" onChange={onChange} value={false} />
          </div>
          <input type="submit" />
      </form>
    </div>
  )
}

export default NewEvent;
