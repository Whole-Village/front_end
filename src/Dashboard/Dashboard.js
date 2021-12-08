import React from 'react';
import './Dashboard.css';
import VillageContainer from '../VillageContainer/VillageContainer';
import { useMutation } from "@apollo/client";
import NewVillageForm from '../NewVillageForm/NewVillageForm.js'
import { updateUser } from '../graphQL/mutations/UpdateUser';
// import { villagesQuery } from '../graphQL/queries/GetVillage';

const Dashboard = ({ handleVillageChange, newVillage, addVillageMembers, villageFormOpen, setVillageFormOpen }) => {

const [mutateUser, { data, loading }] =  useMutation(updateUser)
//loading is a boolean I can use it for conditional rendering
//look into error and refetch
  return (
    <div className="dashboard">
      <h1>My Villages</h1>
      <VillageContainer />
      {villageFormOpen && <NewVillageForm
      handleVillageChange={handleVillageChange}
      newVillage={newVillage}
      addVillageMembers={addVillageMembers}
      setVillageFormOpen= {setVillageFormOpen}
      />}
      <button onClick={() => mutateUser({
        variables: {
          email: 'donna@gmail.com',
          address: '222 Trial Pl.',
          name: 'Todd'
        }
      })}> GraphQL Mutation Trial
      </button>
    </div>
  )
}

export default Dashboard;

//user dashaboard ---> From nav pane on user dash, click create new village ---> takes you to NewVillageForm --->
