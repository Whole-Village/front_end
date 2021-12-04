import { Route, Switch } from 'react-router-dom';
import StartVillage from '../StartVillage/StartVillage';
import Dashboard from '../Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/" 
          render={
            () => <StartVillage />
          }/>
        <Route 
          exact path="/dashboard" 
          render={
            () => <Dashboard />
          }/>
      </Switch>
    </div>
  );
}

export default App;
