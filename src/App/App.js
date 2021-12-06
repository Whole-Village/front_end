import {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
// import NewEvent from '../NewEvent/NewEvent';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import Header from '../Header/Header';
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
        <Route exact path="/" render={() =>
            <NewVillageForm
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              addVillageMembers={addVillageMembers}
            />
        }/>
      </Switch>
    </div>
  );
}

export default App;
