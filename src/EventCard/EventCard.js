import React from 'react';

const EventCard = ({ id, type, name, date, description, time, adult_required, uniqueKey }) => {
  return (
    <div className="event-card">
      <p className="event-details">Event: {name}</p>
      <p className="event-details">Date: {date}</p>
      <p className="event-details">Description: {description}</p>
      <p className="event-details">Start time: {time}</p>
      {adult_required && <p className="event-details">Parent Presence Required</p>}
      {!adult_required && <p className="event-details">Parent Presence Not Required! Enjoy a break. 🥳</p>}
    </div>
  )
}
export default EventCard
