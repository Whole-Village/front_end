import React from "react";
import './VillageContainer.css'
import VillageCard from '../VillageCard/VillageCard'
import { villages } from '../Fixtures/Villages';

const VillageContainer = ({ userVillages }) => {

console.log(userVillages)
const villageCards = userVillages.map((village, i) => {
  return (
  <VillageCard
    key={i}
    id={village.id}
    name={village.name} />
  );
})

console.log(villageCards)
  return (
    <div className="village-container">
    {villageCards}
    </div>
  )
}

export default VillageContainer;
