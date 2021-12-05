import React from "react";
import './VillageContainer.css'
import VillageCard from '../VillageCard/VillageCard'
import { villages } from '../Fixtures/Villages';

const VillageContainer = () => {

const villageCards = villages.map((elem, i) => {
  return (
  <VillageCard 
    key={i}
    id={elem.id}
    name={elem.name} />
  );
})

  return (
    <div className="village-container">
    {villageCards}
    </div>
  )
}

export default VillageContainer;