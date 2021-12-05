import React from 'react';
// import { Link } from 'react-router-dom';
import './VillageHome.css'
import NavVillageHome from '../NavVillageHome/NavVillageHome';
import { villages } from '../Fixtures/Villages';

const VillageHome = ({ id }) => {

  const villageData = villages.filter((elem) => {
    return parseInt(elem.id) === 1})
console.log(villageData)
  return (
    <>
    <NavVillageHome />
    <p>ID: {villageData[0].id}</p>
    <p>Village: {villageData[0].name}</p>
    <p>Type: {villageData[0].type}</p>
    
    </>
  )
}

export default VillageHome;