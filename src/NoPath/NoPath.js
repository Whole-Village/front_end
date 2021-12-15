import React from 'react'
import { Link } from "react-router-dom";

const NoPath = () => {
  return (
    <div>
      <Link to="/dashboard" className="btn">
      <p>Sorry, we couldn't find that village! Click here to go back to your village.</p>
      </Link>
    </div>
  )
}

export default NoPath
