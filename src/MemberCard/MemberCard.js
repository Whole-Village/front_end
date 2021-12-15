import React from 'react';

const MemberCard = ({firstName, lastName, email}) => {
  return(
    <div className="member-card">
      <p className="member-details">{`Name: ${firstName} ${lastName}`}</p>
      <p className="member-details">{`Email: ${email}`}</p>
    </div>
  )
}

export default MemberCard;
