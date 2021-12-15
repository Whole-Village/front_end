import React from 'react';

const ChildCard = ({ id, firstName, lastName }) => {
  return (
    <div className="child-card">
      <p className="child-name">{firstName}</p>
    </div>
  )
}
export default ChildCard
