import React from 'react';
import './MembersAdded.css'


const MembersAdded = ({ villageMembers, removeVillageMember }) => {

  const villageInvitee = villageMembers.map(member => {
    return(
      <div className='village-member-card' key={Math.random()}>
        <p className='village-member-email'>{member.email}</p>
        <button onClick={() => removeVillageMember(member.email)}>{}
          <span className="material-icons">
            remove_circle
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
