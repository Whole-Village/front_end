import {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
// import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import VillageHome from '../VillageHome/VillageHome';
import './App.css';
function App() {
  const [newVillage, setNewVillage] = useState({village_name: '', village_invitees: []});

  const handleVillageChange = (e) => {
    setNewVillage((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
  }

  const addVillageMembers = (allMembers) => {
    setNewVillage((prevProps) => ({
      ...prevProps, village_invitees: allMembers}))
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home" render={() =>
            <NewVillageForm
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              addVillageMembers={addVillageMembers}
            />
        }/>
        <Route
          exact path="/dashboard" render={() =>
            <Dashboard />
        }/>
        <Route exact path="/villages/:id" render={({ match }) => {
					let villageId = match.params.id;
						return (
							<VillageHome villageId={villageId}/>
            )}
        }/>
      </Switch>
    </div>
  );
}

export default App;
