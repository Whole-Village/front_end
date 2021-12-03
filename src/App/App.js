import { Route } from 'react-router-dom';
import StartVillage from '../StartVillage/StartVillage';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path="/" render={() =>
          <StartVillage />
        }
        />
    </div>
  );
}

export default App;
