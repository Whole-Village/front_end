import React from 'react';
import './MembersAdded.css'


const MembersAdded = ({ villageMembers, setVillageMembers }) => {

  const removeVillageMember = (villagerEmail) => {
    console.log(villageMembers)
    const updatedVillageList = villageMembers.filter(villager => villager.email !== villagerEmail)
    setVillageMembers(updatedVillageList)
  }

  const villageInvitee = villageMembers.map(member => {
    return(
      <div className='village-member-card' key={Math.random()}>
        <p className='village-member-email'>{member.email}</p>
        <button className='remove-member-btn' onClick={() => removeVillageMember(member.email)}>
          <span className="material-icons">
            person_remove_alt_1
          </span>
        </button>
      </div>
    )
  })

  return(
    <section className='added-villagers'>
      {villageMembers.length > 0 ? <h2>Village Invite List</h2> : <h2>Please invite some villagers!</h2>}
      {villageInvitee}
    </section>
  )
}

export default MembersAdded;
