import {useState} from 'react';
import { createVillageMember } from '../graphQL/mutations/CreateVillageMember';
import { useMutation } from "@apollo/client";
import './AddNewVillagerForm.css'

const AddNewVillagerForm = ({ villageId, setNewVillagerFormOpen, currentVillage }) => {
  const [newVillager, addNewVillager] = useState({email: ''});
  const [sendInvitations] = useMutation(createVillageMember);
  const [noInviteeListed, setNoInviteeListed] = useState('')
  const [serverError, setServerError] = useState('')
  const [duplicateEmailError, setDuplicateEmailError] = useState('');

  const addVillagers = () => {
    setNoInviteeListed('');
    setServerError('');
    setDuplicateEmailError('');
    const currentUserEmails = currentVillage.users.map((user) => {
      return user.email;
    })
    if(currentUserEmails.includes(newVillager.email)) {
      setDuplicateEmailError('User already exists!');
    }
    if(newVillager.email && !currentUserEmails.includes(newVillager.email)) {
      sendInvitations({
      variables: {
        userEmail: newVillager.email,
        villageId: parseInt(villageId)
      },
      onCompleted: d => populateServerError(d.createVillageMember.errors[0])
    })
    }
    if(!newVillager.email) {
    setNoInviteeListed('Please add an email to be invited')
    }
  }

  const populateServerError = (error) => {
    if (error === 'User must exist') {
      setServerError(error)
    }
    if (!error && !duplicateEmailError) {
      setNewVillagerFormOpen(false)
      window.location.reload();
    }
    return
  }

  const handleInviteNewVillager = (e) => {
    e.preventDefault()
    addNewVillager({[e.target.name]: e.target.value})
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
        </label>
        <button className='send-invite' onClick={addVillagers}>Invite!</button>
      </div>
      <div className='invitees'>
      {noInviteeListed && <p>{noInviteeListed}</p>}
      {serverError === "User must exist" && <p>User must exist!  Please try again!</p>}
      {duplicateEmailError && <p>{duplicateEmailError}</p>}
      <button className="material-icons close-btn" onClick={() => setNewVillagerFormOpen(false)}>
          highlight_off
        </button>
        <h2 className='village-headers'>Village Invite List</h2>
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
