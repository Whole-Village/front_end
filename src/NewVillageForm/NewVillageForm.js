import {useState} from 'react';
import MembersAdded from '../MembersAdded/MembersAdded';
import './NewVillageForm.css';


const NewVillageForm = ({ handleVillageChange, newVillage, addVillageMembers, setVillageFormOpen}) => {
  const [villageMember, addVillageMember] = useState({email: ''})
  const [villageMembers, setVillageMembers] = useState([])

  const handleAddedVillageMember = (e) => {
    e.preventDefault();
    setVillageMembers([...villageMembers, villageMember])
    addVillageMembers(villageMembers)
  }

  const handleVillageMemberChange = (e) => {
    addVillageMember((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
      console.log(villageMember)
  }

  return(
    <div className='new-village-form-modal'>
      Create a New Village
      <form className='village-data-input'>
        <label className='village-data-label'>Village Name
          <input className='village-data'
            type='text'
            name='village_name'
            value={newVillage.village_name}
            onChange={handleVillageChange}
          />
        </label>
        <label className='village-data-label'>Village Description
          <input className='village-data'
            type='text'
            name='village_description'
            value={newVillage.village_description}
            onChange={handleVillageChange}
          />
        </label>
        <label className='village-data-label'>Invitee Email
          <input className='village-data'
            type='text'
            name='email'
            value={villageMember.email}
            onChange={e => handleVillageMemberChange(e)}
          />
          <button className='add-member-btn' onClick={handleAddedVillageMember}>
            <span className="material-icons">
              person_add
            </span>
          </button>
        </label>
      </form>
      <div className='invitees'>
        <h2 className='village-headers'>Village Invite List</h2>
        <div className='roster'>
          <MembersAdded
          villageMembers={villageMembers}
          setVillageMembers={setVillageMembers}
          />
        </div>
        <button className='create-village-btn' onClick={() =>setVillageFormOpen(false)}>Create Village!</button>
      </div>
    </div>
  )
}

export default NewVillageForm;
