import React from 'react'
import { Link } from "react-router-dom";


const NoPath = () => {
  return (
      <div>
        <Link to="/dashboard" className="btn">
        <p>Wrong address! Back to your village.</p>
        </Link>
      </div>
  )
}

export default NoPath
