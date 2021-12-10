import { useState, useEffect } from 'react';
import { eventsQuery } from '../graphQL/queries/GetEvents';
import { useQuery } from "@apollo/client";

import EventCard from '../EventCard/EventCard';

const Events = ({ villageId }) => {
  const [villageEvents, setVillageEvents] = useState([]);

  const { data } = useQuery(eventsQuery, {
    variables: {
      villageId }
    }
  );

  useEffect(() => {
    if(data) {
      setVillageEvents(data.events)
    }
  }, [data])

  // const sortedEvents = events.sort((a, b) => {
  //   return parseInt(b.date) - parseInt(a.date)
  // })

  const eventCards = villageEvents.map(elem => {
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
