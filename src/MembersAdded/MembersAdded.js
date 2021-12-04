import React from 'react';


const MembersAdded = ({ villageMembers }) => {
  let villageMemberCount = 0;
  const villageInvitee = villageMembers.map(member => {
    return(
      <p className='village-member-email' key={member.email}>{member.email}</p>
    )
  })

  return(
    <section className='added-villagers'>
      <h2>Village Invite List</h2>
      {villageInvitee}
    </section>
  )
}

export default MembersAdded;
