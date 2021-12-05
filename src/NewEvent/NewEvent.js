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
        <input type="submit" className="submit-btn" style={{width:300}} />
      </form>
    </div>
  )
}

export default NewEvent;
