import React from 'react';



const NewVillagersAdded = ({ newVillageMembers, setNewVillageMembers, serverError }) => {

  const removeVillageMember = (villagerEmail) => {
    const updatedVillageList = newVillageMembers.filter(villager => villager !== villagerEmail)
    setNewVillageMembers(updatedVillageList)
  }

  const newInvitees = newVillageMembers.map(member => {
    return(
      <div className='village-member-card' key={Math.random()}>
        <div className="added-villager-container">
          {serverError && <p>You've entered an invalid email address. Try again, please!</p>}
          {member ?
            <>
            <div className='village-member-email'>{member}</div>
              <button className='remove-member-btn' onClick={() => removeVillageMember(member)}>
                <span className='material-icons'>
                  person_remove_alt_1
                </span>
              </button>
            </> :
            <p>You haven't entered any new invitees. Try again, please!</p>
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
