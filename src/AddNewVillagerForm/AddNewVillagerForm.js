import {useState} from 'react';
import './AddNewVillagerForm.css'

const AddNewVillagerForm = ({ setNewVillagerFormOpen }) => {
  const [newVillager, addNewVillager] = useState({email: ''});

  const handleInviteNewVillager = (e) => {
    addNewVillager((prevProps) => ({
      ...prevProps, [e.target.name]: e.target.value}))
      console.log(newVillager)
  }

  return(
    <div className='new-villager-form-modal'>
      <div>
        <h3>New Villager Invite Form</h3>
        <label className='new-invitee-label'>New Invitee Email
          <input className='village-data'
            type='text'
            name='email'
            value={newVillager.email}
            onChange={e => handleInviteNewVillager(e)}
          />
        <button className='add-member-btn'>
          <span className="material-icons">
            person_add
          </span>
        </button>
        </label>
        <button className='send-invite' onClick={() => setNewVillagerFormOpen(false)}>Invite!</button>
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
