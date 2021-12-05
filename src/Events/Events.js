import React from 'react';
import { villageData } from '../Fixtures/Villages';
import EventCard from '../EventCard/EventCard';
const village = villageData.village
const Events = () => {
  console.log(village)
  const eventCards = village.events.map(elem => {
      return (
        <div>
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
