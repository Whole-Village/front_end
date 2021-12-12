import './Dashboard.css';
import VillageContainer from '../VillageContainer/VillageContainer';
// import { useMutation, useQuery } from "@apollo/client";
import NewVillageForm from '../NewVillageForm/NewVillageForm.js'


const Dashboard = ({ handleVillageChange, newVillage, setNewVillage, addVillageMembers, villageFormOpen, setVillageFormOpen, addVillageDescription, userVillages, postNewVillage }) => {

// const [mutateUser, { data, loading }] =  useMutation(updateUser)
//loading is a boolean I can use it for conditional rendering
//look into error and refetch
  return (
    <div className="dashboard">
      <h1>My Villages</h1>
      <VillageContainer userVillages={userVillages}/>
      {villageFormOpen && <NewVillageForm
      handleVillageChange={handleVillageChange}
      newVillage={newVillage}
      setNewVillage={setNewVillage}
      addVillageMembers={addVillageMembers}
      setVillageFormOpen={setVillageFormOpen}
      addVillageDescription={addVillageDescription}
      postNewVillage={postNewVillage}
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
