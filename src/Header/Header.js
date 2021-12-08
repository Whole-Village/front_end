import React from 'react';
import './Header.css';

const Header = ({ setVillageFormOpen }) => {

return(
    <header className='wholevillage-logo'>
      <div className='logo'>
        <p className='app-title'><span className="first-letter">W</span>holevillage</p>
        <p className='app-mission'>connecting parents</p>
      </div>
      <div className='navigation-bar'>
        <div className='start-village'>
          <button className='start-village-btn' onClick={() => setVillageFormOpen(true)}>Start Village</button>
          <button className='my-events-btn'>My Events</button>
          <button className='my-dashboard-btn'>My Dashboard</button>
          <button className='my-account-btn'>Manage Account</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
