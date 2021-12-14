import {useState} from 'react';
import NewVillagersAdded from '../NewVillagersAdded/NewVillagersAdded';
import { createVillageMember } from '../graphQL/mutations/CreateVillageMember';
import { useMutation } from "@apollo/client";
import './AddNewVillagerForm.css'

const AddNewVillagerForm = ({ villageId, setNewVillagerFormOpen }) => {
  const [newVillager, addNewVillager] = useState({email: ''});
  const [newVillageMembers, setNewVillageMembers] = useState([]);
  const [sendInvitations, {data, loading}] = useMutation(createVillageMember);
  const [noInviteeError, setNoInviteeError] = useState(false)
  const [serverError, setServerError] = useState('')

  console.log(newVillager.email)
  const addVillagers = (e) => {
    e.preventDefault()
    if(!newVillager.email){
      setNoInviteeError(true)
    } else {
      sendInvitations({
        variables: {
          userEmail: newVillager,
          villageId: parseInt(villageId)
        },
        onCompleted: d => populateServerError(d.createVillageMember.errors[0])
      })
    }
  }

  const populateServerError = (error) => {
    if (error === 'User must exist') {
      setServerError(error)
    }
    return
  }

  // const handleNewVillagers = (e) => {
  //   console.log(newVillageMembers[0])
  //   e.preventDefault();
  //   if(!newVillageMembers[0]) {
  //     setNewVillageMembers([...newVillageMembers, newVillager.email])
  //     setNoInviteeError(true)
  //   }
  // }

  const handleInviteNewVillager = (e) => {
    e.preventDefault()
    addNewVillager({[e.target.name]: e.target.value})
      console.log(newVillager)
  }
  console.log(newVillager)

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
        <button className='send-invite' onClick={e => addVillagers(e)}>Invite!</button>
      </div>
      <div className='invitees'>
        <h2 className='village-headers'>Village Invite List</h2>
        <div className='roster'>
          <NewVillagersAdded
          noInviteeError={noInviteeError}
          newVillager={newVillager}
          serverError={serverError}
          />
        </div>
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
