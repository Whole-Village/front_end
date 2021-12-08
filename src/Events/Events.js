import React from 'react';
import { villageData } from '../Fixtures/Villages';
import EventCard from '../EventCard/EventCard';
const village = villageData.village
const Events = () => {
  console.log(village)
  const sortedEvents = village.events.sort((a, b) => {
    console.log(a)
    return parseInt(b.date) - parseInt(a.date)
  })
  const eventCards = sortedEvents.map(elem => {
      return (
        <div>
        <p className="event-date">{elem.date}</p>
        <EventCard
        id={elem.id}
        type={elem.type}
        name={elem.name}
        date={elem.date}
        description={elem.description}
        time={elem.time}
        adult_required={elem.adult_required}
        />
        </div>
      )
    })

  return (
    <div>
    {eventCards}
    </div>
  )
}

export default Events;
