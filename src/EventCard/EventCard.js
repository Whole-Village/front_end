import React from 'react';

const EventCard = ({ id, type, name, date, description, time, adult_required }) => {
  return (
    <div className="event-card">
      <p>{id}</p>
      <p>{type}</p>
      <p>{name}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{time}</p>
      <p>{adult_required}</p>
    </div>
  )
}
export default EventCard
