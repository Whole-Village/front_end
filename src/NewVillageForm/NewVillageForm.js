import React from 'react';
import './NewVillageForm.css';


const NewVillageForm = ({ handleVillageChange, newVillage}) => {


  return(
    <form className='new-village-form'>
      <input
        type='text'
        placeholder='Fuller Elementary 4th Grade...'
        name='name'
        value={newVillage.name}
        onChange={handleVillageChange}
      />
      <button className='create-village-btn' onClick={console.log('trash')}>
        <span className="material-icons">
          send
        </span>
      </button>
    </form>
  )
}

export default NewVillageForm;
