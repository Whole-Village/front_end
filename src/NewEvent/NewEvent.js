import React from 'react';
import './NewEvent.css';
import { useEffect, useState } from 'react';

const NewEvent = () => {
  const[value, setValue] = useState({name: '', date: '', time: '', description: '', adultRequired: ''});
  const onChange = (event) => {
    setValue({...value, [event.target.name]: event.target.value});
  };
  return (
    <form>
      <label htmlFor="name">Event Name:</label>
      <input type="text" name="name" onChange={onChange} />
      <label htmlFor="date">Event Date:</label>
      <input type="date" name="date" onChange={onChange} />
      <label htmlFor="time">Event Time:</label>
      <input type="time" name="time" onChange={onChange} />
      <label htmlFor="description">Event Description:</label>
      <input type="text" name="description" onChange={onChange} />
      <label>Is an adult required?</label>
      <label  htmlFor="adultRequired">Yes</label>
      <input type="radio" name="adult" onChange={onChange} value={true} />
      <label  htmlFor="adultRequired">No</label>
      <input type="radio" name="adult" onChange={onChange} value={false} />
      <input type="submit" />
    </form>
  )
}

export default NewEvent;
