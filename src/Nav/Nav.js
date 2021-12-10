import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardNavLinks } from './navLinks';

const Nav = () => {

  const dashboardLinks = dashboardNavLinks.map((elem, i) => {
    return <Link to={elem.url} key={i}>{elem.name}</Link>
    ;
  })

  return (
    <>
    {dashboardLinks}
    </>
  )
}

export default Nav;