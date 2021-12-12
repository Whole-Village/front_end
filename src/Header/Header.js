import { useLocation, useHistory } from 'react-router-dom';
import './Header.css';

const Header = ({ setVillageFormOpen }) => {
let history  = useHistory();

const returnToDashboard = () => {
  history.push('/dashboard')
  console.log(history)
}
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
          {!useLocation().pathname.includes('/dashboard') && <button className='my-dashboard-btn' onClick={returnToDashboard}>My Dashboard</button> }
          <button className='my-account-btn'>Manage Account</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
