import React from 'react';



const NewVillagersAdded = ({ newVillageMembers, setNewVillageMembers, noInviteeError, serverError }) => {

  const removeVillageMember = (villagerEmail) => {
    console.log(newVillageMembers)
    const updatedVillageList = newVillageMembers.filter(villager => villager !== villagerEmail)
    setNewVillageMembers(updatedVillageList)
    console.log(newVillageMembers)
  }

  const newInvitees = newVillageMembers.map(member => {
    return(
      <div className='village-member-card' key={Math.random()}>
        <div className="added-villager-container">
          {serverError ? <p>You haven't entered any new invitees. Try again, please!</p>:
          <>
          <div className='village-member-email'>{member}</div>
            <button className='remove-member-btn' onClick={() => removeVillageMember(member)}>
              <span className='material-icons'>
                person_remove_alt_1
              </span>
            </button>
          </>
          }
        </div>
      </div>
    )
  })

  return(
    <div className='added-villagers'>
      {newInvitees}
    </div>

  )
}

export default NewVillagersAdded;
