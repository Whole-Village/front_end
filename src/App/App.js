import { Route, Switch } from 'react-router-dom';
import StartVillage from '../StartVillage/StartVillage';
import NewVillageForm from '../NewVillageForm/NewVillageForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>
          <div>
            <StartVillage />
            <NewVillageForm />
          </div>
        }
        />
      </Switch>
    </div>
  );
}

export default App;
