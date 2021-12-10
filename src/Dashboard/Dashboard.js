import { useState, useEffect } from 'react';
import './Dashboard.css';
import VillageContainer from '../VillageContainer/VillageContainer';
import { useQuery } from "@apollo/client";
import NewVillageForm from '../NewVillageForm/NewVillageForm.js'
// import { updateUser } from '../graphQL/mutations/UpdateUser';
import { userQuery } from '../graphQL/queries/GetUser';


const Dashboard = ({ handleVillageChange, newVillage, addVillageMembers, villageFormOpen, setVillageFormOpen, addVillageDescription }) => {
  const [user, setUser] = useState([]);
  const email = "priya@gmail.com";
  const { data } = useQuery(userQuery, {
    variables: {
      email }
    }
  );

  useEffect(() => {
    if(data) {
      setUser(data.user.villages)
    }
  },[data])

// const [mutateUser, { data, loading }] =  useMutation(updateUser)
//loading is a boolean I can use it for conditional rendering
//look into error and refetch
  return (
    <div className="dashboard">
      <h1>My Villages</h1>
      <VillageContainer userVillages={user}/>
      {villageFormOpen && <NewVillageForm
      handleVillageChange={handleVillageChange}
      newVillage={newVillage}
      addVillageMembers={addVillageMembers}
      setVillageFormOpen={setVillageFormOpen}
      addVillageDescription={addVillageDescription}
      />}
      {/* <button onClick={() => mutateUser({
        variables: {
          email: 'donna@gmail.com',
          address: '222 Trial Pl.',
          name: 'Todd'
        }
      })}> {!loading && data}Trial for graphQL Mutation
      </button> */}
    </div>
  )
}

export default Dashboard;

//user dashaboard ---> From nav pane on user dash, click create new village ---> takes you to NewVillageForm --->
