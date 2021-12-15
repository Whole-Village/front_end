import { useLocation, useHistory } from 'react-router-dom';
import Children from '../Children/Children';
import './Header.css';


const Header = ({ setVillageFormOpen, setCurrentUserChildren, currentUserChildren, currentUser }) => {
  let history  = useHistory();
  const userId = currentUser.id;
  const returnToDashboard = () => {
  history.push('/dashboard')
  }

  const toggleDropdown = () => {
  return (document.getElementById("myDropdown").classList.toggle("show"))
}

  return(
      <header className='wholevillage-logo'>
        <div className='logo'>
          <p className='app-title'><span className="first-letter">W</span>hole<span className="second-letter">V</span>illage</p>
          <p className='app-mission'>connecting parents</p>
        </div>
        <div className='navigation-bar'>
          <div className='start-village'>
            <p>Welcome, {currentUser.firstName}!</p>
            <button className="children-btn" onClick={toggleDropdown}>Children</button>
            <div className="dropdown" id="myDropdown">
              <Children
                children={currentUserChildren}
                setChildren={setCurrentUserChildren}
                userId={userId}
              />
            </div>
            <button className='start-village-btn' onClick={() => setVillageFormOpen(true)}>Start a New Village</button>
            {!useLocation().pathname.includes('/dashboard') && <button className='my-dashboard-btn' onClick={returnToDashboard}>My Dashboard</button> }
          </div>
        </div>
      </header>
    )
  }

export default Header;
