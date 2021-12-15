import './Dashboard.css';
import VillageContainer from '../VillageContainer/VillageContainer';
import NewVillageForm from '../NewVillageForm/NewVillageForm.js'


const Dashboard = ({ handleVillageChange, newVillage, setNewVillage, addVillageMembers, villageFormOpen, setVillageFormOpen, addVillageDescription, userVillages, postNewVillage, checkVillageFields, setError, error }) => {

  return (
    <div className="dashboard">
      <h1>Villages</h1>
      <VillageContainer userVillages={userVillages}/>
      {villageFormOpen && <NewVillageForm
      handleVillageChange={handleVillageChange}
      newVillage={newVillage}
      setNewVillage={setNewVillage}
      addVillageMembers={addVillageMembers}
      setVillageFormOpen={setVillageFormOpen}
      addVillageDescription={addVillageDescription}
      postNewVillage={postNewVillage}
      checkVillageFields={checkVillageFields}
      setError={setError}
      error={error}
      />}
    </div>
  )
}

export default Dashboard;
