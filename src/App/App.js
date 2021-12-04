import {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
// import StartVillage from '../StartVillage/StartVillage';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import './App.css';

function App() {
  const [newVillage, setNewVillage] = useState({name: ''});
  const [newVillageStatus, setNewVillageStatus] = useState({nameSubmitted: false});

  const handleVillageChange = (e) => {
    setNewVillage((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
  }

  const changeVillageSubmitStatus = () => {
    setNewVillageStatus({nameSubmitted: true})
    console.log(newVillage);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>
          !newVillageStatus.nameSubmitted ?
          <form onSubmit={changeVillageSubmitStatus}>
            <input
              type='text'
              placeholder='Fuller Elementary 4th Grade...'
              name='name'
              value={newVillage.name}
              onChange={handleVillageChange}
            />
            <button type='submit'>START A VILLAGE</button>
          </form> :
          <NewVillageForm
            handleVillageChange={handleVillageChange}
            newVillage={newVillage}
          />
        }/>
      </Switch>
    </div>
  );
}

export default App;
