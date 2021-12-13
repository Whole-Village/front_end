import React from "react";
import { NavLink } from "react-router-dom";
import './VillageCard.css'
import './VillageCard.js'

const VillageCard = ({ id, name }) => {
  return (
    <>
    <NavLink className="navlink__village-card" to={`/villages/${id}`}>
      <section className="village-card">
        <p className="village-name">{name}</p>
      </section>
    </NavLink>

    </>
  )
}

export default VillageCard;
