import React from "react";
import './VillageCard.js'

const VillageCard = () => {
  // pass props down
  //Map user's village array to make VillageCards
  

  return (
  <Link to={`/villages/${id}`}>
    <article className="village-card">
      <h3>VILLAGE CARD</h3>
    </article>
  </Link>
  )
}

export default VillageCard;