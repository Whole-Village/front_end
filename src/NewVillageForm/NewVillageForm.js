import React from 'react';
import './NewVillageForm.css';


const NewVillageForm = () => {


  return(
    <form>
      <input
        type='text'
        placeholder='Fuller Elementary 4th Grade...'
        name='name'
      />
      <button onClick={console.log('trash')}>
        <span className="material-icons-outlined">
          send
        </span>
      </button>
    </form>
  )
}

export default NewVillageForm;
