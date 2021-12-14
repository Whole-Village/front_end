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
  // const [noInviteeError, setNoInviteeError] = useState({[member]:d.createVillageMember.errors[0]})

  const addVillagers = () => {
      newVillageMembers.forEach(member => {
      sendInvitations({
        variables: {
          userEmail: member,
          villageId: parseInt(villageId)
        },
        onCompleted: d => console.log(d.createVillageMember.errors[0]),
        // onCompleted: d => {
        //   setNoInviteeError({...noInviteeError, [member]: d.createVillageMember.errors[0]})
        // }
      })
    })
    // console.log(data)
    // console.log(data?.createVillageMember.errors)
    setNewVillagerFormOpen(false)
    // window.location.reload()
  }

  console.log(loading)

  const handleNewVillagers = (e) => {
    e.preventDefault();
    if(!newVillageMembers.includes(newVillager.email)) {
      setNewVillageMembers([...newVillageMembers, newVillager.email])
    }
    if(!newVillager.email) {
      setNoInviteeError(true)
    }
  }

  const handleInviteNewVillager = (e) => {
    e.preventDefault()
    addNewVillager({[e.target.name]: e.target.value})
      console.log(newVillager)
  }

  console.log(data)
  console.log(data?.createVillageMember.errors)

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
        <button className='add-member-btn' onClick={(e) => handleNewVillagers(e)}>
          <span className="material-icons">
            person_add
          </span>
        </button>
        </label>
        <button className='send-invite' onClick={addVillagers}>Invite!</button>
      </div>
      <div className='invitees'>
        <h2 className='village-headers'>Village Invite List</h2>
        <div className='roster'>
          <NewVillagersAdded
          noInviteeError={noInviteeError}
          newVillageMembers={newVillageMembers}
          setNewVillageMembers={setNewVillageMembers} />
        </div>
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
