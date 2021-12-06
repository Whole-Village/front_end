import {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import VillageHome from '../VillageHome/VillageHome';
import './App.css';

function App() {
  const [newVillage, setNewVillage] = useState({village_name: '', village_invitees: []});
  const [newVillageStatus, setNewVillageStatus] = useState({nameSubmitted: false});

  const handleVillageChange = (e) => {
    setNewVillage((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
  }

  const changeVillageSubmitStatus = () => {
    setNewVillageStatus({nameSubmitted: true})
  };

  const addVillageMembers = (allMembers) => {
    setNewVillage((prevProps) => ({
      ...prevProps, village_invitees: allMembers}))
  }

  return (
    <div className="App">{console.log("new village members:",newVillage)}
      <Switch>
        <Route exact path="/" render={() =>
          !newVillageStatus.nameSubmitted ?
          <form onSubmit={changeVillageSubmitStatus}>
            <input
              type='text'
              placeholder='Fuller Elementary 4th Grade...'
              name='village_name'
              value={newVillage.village_name}
              onChange={handleVillageChange}
            />
            <button type='submit'>START A VILLAGE</button>
          </form> :
          <div>
            <NewVillageForm
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              addVillageMembers={addVillageMembers}
            />
            <NewEvent />
          </div>
        }/>
        <Route 
          exact path="/dashboard" 
          render={
            () => <Dashboard />
          }/>
          <Route
							exact
							path="/villages/:id"
							render={({ match }) => {
								let villageId = match.params.id;
									return (
										<VillageHome
											villageId={villageId}
										/>)}} />
      </Switch>
    </div>
  );
}

export default App;
