import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import StartVillage from '../StartVillage/StartVillage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>
          <StartVillage />
        }
        />
      </Switch>
    </div>
  );
}

export default App;
