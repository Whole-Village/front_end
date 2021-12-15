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
      setDuplicateEmailError('This user is already in your village.');
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
    setNoInviteeListed('Please add an email to send invite.')
    }
  }

  const populateServerError = (error) => {
    if (error === 'User must exist') {
      setServerError(error)
    }
    if (!error || !duplicateEmailError) {
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
    <div className='new-villager2-form-modal'>
      <button className="material-icons close-btn" onClick={() => setNewVillagerFormOpen(false)}>
          highlight_off
      </button>
      <h3 className="form-title">Invite Another Villager</h3>
      <label className='new-invitee-label'>New Invitee Email</label>
      <input className='email-input'
        type='text'
        name='email'
        value={newVillager.email}
        onChange={e => handleInviteNewVillager(e)}
      />
      <div className="btn-ctnr">
        <button className='send-invite' onClick={addVillagers}>
        Invite!
        </button>
      </div>
      {noInviteeListed && <p className="error-mess">{noInviteeListed}</p>}
      {serverError === "User must exist" && <p className="error-mess">User must have a Whole Village account to be added.</p>}
      {duplicateEmailError && <p className="error-mess">{duplicateEmailError}</p>}
    </div>
  )
}

export default AddNewVillagerForm;
