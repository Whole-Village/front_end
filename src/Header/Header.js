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
        {/* TO DO: Add My Events link */}
          {!useLocation().pathname.includes('/dashboard') && <button className='my-dashboard-btn' onClick={returnToDashboard}>My Dashboard</button> }
          {/* TO DO: Add a Manage Account link */}
        </div>
      </div>
    </header>
  )
}

export default Header;
