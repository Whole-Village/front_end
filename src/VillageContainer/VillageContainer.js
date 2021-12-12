import React from "react";
import './VillageContainer.css'
import VillageCard from '../VillageCard/VillageCard'

const VillageContainer = ({ userVillages }) => {

const villageCards = userVillages.map((village, i) => {
  return (
  <VillageCard
    key={i}
    id={village.id}
    name={village.name} />
  );
})

  return (
    <div className="village-container">
    {villageCards}
    </div>
  )
}

export default VillageContainer;
