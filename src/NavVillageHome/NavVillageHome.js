import React from 'react';
import { Link } from 'react-router-dom';
import { villageHomeNavLinks } from '../Nav/navLinks';

const NavVillageHome = () => {

  const villageHomeLinks = villageHomeNavLinks.map((elem, i) => {
    return <Link to={elem.url} key={i}>{elem.name}</Link>
  })

  return (
    <>
    {villageHomeLinks}
    </>
  )
}

export default NavVillageHome;
