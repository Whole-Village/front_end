import React from "react";
import { Link } from "react-router-dom";
import './VillageCard.js'

const VillageCard = ({ id, name }) => {
  return (
  <Link to={`/villages/${id}`}>
    <article className="village-card">
      <h3>{name}</h3>
    </article>
  </Link>
  )
}

export default VillageCard;