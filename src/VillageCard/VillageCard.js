import React from "react";
import { Link } from "react-router-dom";
import './VillageCard.css'
import './VillageCard.js'

const VillageCard = ({ id, name }) => {
  return (
    <>
  <Link to={`/villages/${id}`}>
    <div className="village-card">
  <div className="color-indicator" />
      <div className="event-card-info">
      <p>{name}</p>
</div>
    </div>
  </Link>
    <Link to={`/villages/${id}`}>
    <div className="village-card">
      <p>{name}</p>
    </div>
  </Link>
    <Link to={`/villages/${id}`}>
    <div className="village-card">
      <p>{name}</p>
    </div>
  </Link>
  </>
  )
}

export default VillageCard;