import React from 'react';
import './MembersAdded.css'


const MembersAdded = ({ villageMembers, setVillageMembers }) => {

  const removeVillageMember = (villagerEmail) => {
    const updatedVillageList = villageMembers.filter(villager => villager !== villagerEmail)
    setVillageMembers(updatedVillageList)
  }

  const villageInvitee = villageMembers.map(member => {
    return(
      <div className='village-member-card' key={Math.random()}>
        <div className="added-villager-container">
          <div className='village-member-email'>{member}</div>
          <button className='remove-member-btn' onClick={() => removeVillageMember(member)}>
            <span className='material-icons'>
              person_remove_alt_1
            </span>
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className='added-villagers'>
      {villageInvitee}
    </div>
  )
}

export default MembersAdded;
