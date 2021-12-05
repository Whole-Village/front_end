import React from 'react';
import { Link } from 'react-router-dom';
import './VillageHome.css'
import NavVillageHome from '../NavVillageHome/NavVillageHome';
import { villages } from '../Fixtures/Villages';

const VillageHome = ({ id }) => {

  const villageData = villages.filter((elem) => parseInt(elem.id) === "1")

  return (
    <>

    <NavVillageHome />
    <p>ID: {villageData.id}</p>
    <p>Village: {villageData.name}</p>
    <p>Type: {villageData.type}</p>
    
    </>
  )
}

export default VillageHome;


