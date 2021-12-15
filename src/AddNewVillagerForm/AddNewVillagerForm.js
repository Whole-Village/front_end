import {useState} from 'react';
import NewVillagersAdded from '../NewVillagersAdded/NewVillagersAdded';
import { createVillageMember } from '../graphQL/mutations/CreateVillageMember';
import { useMutation } from "@apollo/client";
import './AddNewVillagerForm.css'

const AddNewVillagerForm = ({ villageId, setNewVillagerFormOpen, currentVillage }) => {
  const [newVillager, addNewVillager] = useState({email: ''});
  const [newVillageMembers, setNewVillageMembers] = useState([]);
  const [sendInvitations, {data, loading}] = useMutation(createVillageMember);
  const [noInviteeListed, setNoInviteeListed] = useState('')
  const [serverError, setServerError] = useState('')
  const [duplicateEmailError, setDuplicateEmailError] = useState('');


  console.log(currentVillage)
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
    console.log('currentuser emails', currentUserEmails)
    console.log(duplicateEmailError)
      if(newVillager.email && !duplicateEmailError) {
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
    if (!error || !duplicateEmailError) {
      setNewVillagerFormOpen(false)
      // window.location.reload();
    }
    return
  }

  // const handleNewVillagers = (e) => {
  //   // e.preventDefault();
  //   if(newVillageMembers.length === 0) {
  //     setNewVillageMembers([...newVillageMembers, newVillager.email])
  //   }
  //   if(!newVillager.email) {
  //     setNoInviteeError(true)
  //   }
  // }

  const handleInviteNewVillager = (e) => {
    e.preventDefault()
    addNewVillager({[e.target.name]: e.target.value})
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
        {/* <button className='add-member-btn' onClick={(e) => handleNewVillagers(e)}>
          <span className="material-icons">
            person_add
          </span>
        </button> */}
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
        {/* <div className='roster'>
          <NewVillagersAdded
          noInviteeError={noInviteeError}
          newVillageMembers={newVillageMembers}
          setNewVillageMembers={setNewVillageMembers}
          serverError={serverError}
          />
        </div> */}
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
