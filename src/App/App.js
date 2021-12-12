import {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import VillageHome from '../VillageHome/VillageHome';
import { userQuery } from '../graphQL/queries/GetUser';
import { useQuery } from "@apollo/client";
import './App.css';


function App() {
  const [newVillage, setNewVillage] = useState({village_name: '', village_invitees: [], village_description: ''});
  const [villageFormOpen, setVillageFormOpen] = useState(false);
  const [userVillages, setUserVillages] = useState([]);
  const email = "priya@gmail.com";
  const { data } = useQuery(userQuery, {
    variables: {
      email }
    }
  );
  // const { loading, error, data } <--Need to add error/loading conditionals for user


  useEffect(() => {
    if(data) {
      setUserVillages(data.user.villages)
    }
  },[data])

  const handleVillageChange = (e) => {
    setNewVillage((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
  }

  const addVillageMembers = (allMembers) => {
    setNewVillage((prevProps) => ({
      ...prevProps, village_invitees: allMembers}))
  }

  const addVillageDescription = (e) => {
    setNewVillage((prevProps) => ({
      ...prevProps, village_description: e}))
  }

  return (
    <div className="App">
      <Header
      setVillageFormOpen={setVillageFormOpen}/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route
          exact path="/dashboard" render={() =>
            <Dashboard
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              addVillageMembers={addVillageMembers}
              villageFormOpen={villageFormOpen}
              setVillageFormOpen= {setVillageFormOpen}
              addVillageDescription= {addVillageDescription}
              userVillages={userVillages}
            />
        }/>
        <Route exact path="/villages/:id" render={({ match }) => {
					let villageId = match.params.id;
						return (
							<VillageHome
              id={villageId}
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              addVillageMembers={addVillageMembers}
              villageFormOpen={villageFormOpen}
              setVillageFormOpen={setVillageFormOpen}
              addVillageDescription={addVillageDescription}
              />
            )}
        }/>
      </Switch>
    </div>
  );
}

export default App;
