import React from 'react';

const AddNewVillagerForm = () => {
  return(
    <div className='new-villager-form-modal'>
      <form className='new-villager-data'>
      <label className='village-data-label'>Invitee Email
        <input className='village-data'
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
      </label>
      </form>
      <div className='invitees'>
        <h2 className='village-headers'>Village Invite List</h2>
        <div className='roster'>
          <MembersAdded
          villageMembers={villageMembers}
          setVillageMembers={setVillageMembers}
          />
        </div>
        <button className='create-village-btn' onClick={postNewVillage}>Create Village!</button>
      </div>
    </div>
  )
}


export default AddNewVillagerForm;
