import React from 'react';

const MemberCard = ({firstName, lastName, email}) => {
  return(
    <div className="member-card">
      <p>{`Name: ${firstName} ${lastName}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  )
}


export default MemberCard;
