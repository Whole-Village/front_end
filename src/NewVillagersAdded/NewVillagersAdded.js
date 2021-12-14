import React from 'react';



const NewVillagersAdded = ({ newVillager, serverError, noInviteeError }) => {

  // const removeVillageMember = (villagerEmail) => {
  //   console.log(newVillageMembers)
  //   const updatedVillageList = newVillageMembers.filter(villager => villager !== villagerEmail)
  //   setNewVillageMembers(updatedVillageList)
  //   console.log(newVillageMembers)
  // }

  // const checkError = () => {
  //   if(serverError) {
  //     return <p>You've entered an invalid email address. Try again, please!</p>
  //   } else if(inviteeError) {
  //     return <p>You've entered an invalid email address. Try again, please!</p>
  //   } else {
  //     const newInvitees = newVillageMembers.map(member => {
  //       <div className='village-member-card' key={Math.random()}>
  //       <div className="added-villager-container">
  //           <div className='village-member-email'>{member}</div>
  //             <button className='remove-member-btn' onClick={() => removeVillageMember(member)}>
  //               <span className='material-icons'>
  //                 person_remove_alt_1
  //               </span>
  //             </button>
  //             </div>
  //       </div>
  //     })
  //     return newInvitees;
  //   }
  // }


  return(
    <div className='added-villagers'>
      <div className='village-member-card' key={Math.random()}>
        <div className="added-villager-container">
            <div className='village-member-email'>{newVillager}</div>
        </div>
      </div>
    </div>

  )
}

export default NewVillagersAdded;
