import {useState} from 'react';
import MembersAdded from '../MembersAdded/MembersAdded';
import './NewVillageForm.css';


const NewVillageForm = ({ handleVillageChange, newVillage, addVillageMembers}) => {
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
      // console.log(villageMember)
  }

  return(
    <div>
      <form className='new-village-form'>
      <label>Village Name
      </label>
        <input
          type='text'
          name='village_name'
          value={newVillage.village_name}
          onChange={handleVillageChange}
        />
      </form>
      <form>
        <label>Email
        </label>
        <input
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
      <section>
        <MembersAdded villageMembers={villageMembers}/>
      </section>
    </div>
  )
}

export default NewVillageForm;
