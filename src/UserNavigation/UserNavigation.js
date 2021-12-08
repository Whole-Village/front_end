import React from 'react';
import { womanImage } from '../assets/woman-img-link';
import './UserNavigation.css'

const UserNavigation = () => {
  return(
    <div className='user-dash-nav'>
      <img className='user-img' src={womanImage}/>
      <h3>Nina Williams</h3>
      <p>My Calendar</p>
      <p>Manage Profile</p>
    </div>
  )
};

export default UserNavigation;
