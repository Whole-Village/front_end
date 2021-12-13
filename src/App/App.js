import {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
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
  const [villageToCreate] = useMutation(createVillage)
  const email = "priya@gmail.com";
  const { data, refetch } = useQuery(userQuery, {
    variables: {
      email }
    }
  );
  refetch();
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

  const postNewVillage = (e, roster) => {
    e.preventDefault()
    // setNewVillage((prevProps) => ({...prevProps, village_invitees: roster}))
    newVillage.village_invitees = roster
    console.log(newVillage.village_invitees)
    villageToCreate({
      variables: {
        name: newVillage.village_name,
        description: newVillage.village_description,
        userEmails: newVillage.village_invitees
      }
    })
    setVillageFormOpen(false)
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
      </Switch>
    </div>
  );
}

export default App;
