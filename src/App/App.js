import {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import NoPath from '../NoPath/NoPath';
import {useMutation} from '@apollo/client';
import { createVillage } from '../graphQL/mutations/CreateVillage';
import VillageHome from '../VillageHome/VillageHome';
import { userQuery } from '../graphQL/queries/GetUser';
import { useQuery } from "@apollo/client";
import './App.css';


function App() {
  const [newVillage, setNewVillage] = useState({village_name: '', village_invitees: [], village_description: ''});
  const [villageFormOpen, setVillageFormOpen] = useState(false);
  const [userVillages, setUserVillages] = useState([]);
  const [error, setError] = useState(false);
  const [villageToCreate] = useMutation(createVillage)
  const email = "priya@gmail.com";
  const { data, refetch } = useQuery(userQuery, {
    variables: {
      email }
    }
  );
  refetch();

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

  const postNewVillage = (e, roster) => {
    e.preventDefault()
    newVillage.village_invitees = roster
    if (newVillage.village_name && newVillage.village_description && roster.length > 0) {
      console.log(newVillage.village_invitees)
      villageToCreate({
        variables: {
          name: newVillage.village_name,
          description: newVillage.village_description,
          userEmails: newVillage.village_invitees
        }
      })
      setVillageFormOpen(false)
    } else {
      setError(true)
      }

  }

  const checkVillageFields = (e, villageMembers) => {
    e.preventDefault()
    if (newVillage.village_name && newVillage.village_description && newVillage.village_invitees) {
      setError(false)
      postNewVillage(e, villageMembers);
    } else {
      setError(true)
      }
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
              setNewVillage={setNewVillage}
              addVillageMembers={addVillageMembers}
              villageFormOpen={villageFormOpen}
              setVillageFormOpen= {setVillageFormOpen}
              addVillageDescription= {addVillageDescription}
              userVillages={userVillages}
              postNewVillage={postNewVillage}
              checkVillageFields={checkVillageFields}
              setError={setError}
              error={error}
            />
        }/>
        <Route exact path="/villages/:id" render={({ match }) => {
					let villageId = match.params.id;
						return (
							<VillageHome
              id={villageId}
              handleVillageChange={handleVillageChange}
              newVillage={newVillage}
              setNewVillage={setNewVillage}
              addVillageMembers={addVillageMembers}
              villageFormOpen={villageFormOpen}
              setVillageFormOpen={setVillageFormOpen}
              addVillageDescription={addVillageDescription}
              postNewVillage={postNewVillage}
              />
            )}
        }/>
        <Route component={ NoPath } />
      </Switch>
    </div>
  );
}

export default App;
