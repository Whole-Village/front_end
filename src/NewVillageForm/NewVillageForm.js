import {useState, useEffect} from 'react';
import MembersAdded from '../MembersAdded/MembersAdded';
import './NewVillageForm.css';


const NewVillageForm = ({ handleVillageChange, newVillage, setVillageFormOpen, addVillageDescription, postNewVillage –}) => {
  const [villageMember, addVillageMember] = useState({email: ''})
  const [villageMembers, setVillageMembers] = useState([])

  const handleAddedVillageMember = (e) => {
    e.preventDefault();
    setVillageMembers([...villageMembers, villageMember.email])
    console.log(villageMembers)
  }

  const handleVillageMemberChange = (e) => {
    addVillageMember({[e.target.name]: e.target.value})
  }

  return(
    <div className='new-village-form-modal'>
      <header className='village-form-header'>
        <h3 className='form-name'>Start a New Village</h3>
        <button className="material-icons close-btn" onClick={() => setVillageFormOpen(false)}>
          highlight_off
        </button>
      </header>
      <form className='village-data-input'>
        <label className='village-name-label'>Village Name</label>
        <input className='village-name-input'
          type='text'
          name='village_name'
          value={newVillage.village_name}
          onChange={handleVillageChange}
          />
        <label className='village-description-label'>Village Description</label>
        <input className='village-description-input'
          type='text'
          name='village_description'
          value={newVillage.village_description}
          onChange={(e) => addVillageDescription(e.target.value)}
        />
        <label className='village-email-label'>Invitee Email</label>
        <input className='village-email-input'
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
      </form>
      <div className='invitees'>
        <p className='village-headers'>Village Invite List</p>
        <div className='roster'>
          <MembersAdded
          villageMembers={villageMembers}
          setVillageMembers={setVillageMembers}
          />
        </div>
        <button className='create-village-btn' onClick={(e) => postNewVillage(e, villageMembers)}>Create Village!</button>
      </div>
    </div>
  )
}

export default NewVillageForm;
