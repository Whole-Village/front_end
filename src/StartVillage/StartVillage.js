import { useState } from 'react';

const StartVillage = () => {
  const [newVillage, setNewVillage] = useState({name: ''});

  //placeholder function for what we want to do when they start their first Village...AKA go to full CreateVillageForm
  const startVillage = (e) => {
    e.preventDefault()
    console.log('NewVillage:', newVillage)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Fuller Elementary 4th Grade...'
        name='name'
        onChange={ e => setNewVillage([e.target.name] = e.target.value)}
      />
      <button onClick={e => startVillage(e)}>START A VILLAGE</button>
    </form>
  )
}

export default StartVillage;
