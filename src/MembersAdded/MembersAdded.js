import React from 'react';


const MembersAdded = ({ villageMembers }) => {
  const villageInvitee = villageMembers.map(member => {
    return(
      <p key={member.email}>{member.email}</p>
    )
  })

  return(
    <div className='added-villager'>{villageInvitee}</div>
  )
}

export default MembersAdded;
