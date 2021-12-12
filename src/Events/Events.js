import { useEffect } from 'react';
import { eventsQuery } from '../graphQL/queries/GetEvents';
import { useQuery } from "@apollo/client";

import EventCard from '../EventCard/EventCard';

const Events = ({ villageId, villageEvents, setVillageEvents }) => {

  const { data } = useQuery(eventsQuery, {
    variables: {
      villageId
    }
  });

  useEffect(() => {
    if(data) {
      setVillageEvents(data.events)
    }
  }, [data, setVillageEvents])

  const eventCards = villageEvents.map((elem, i) => {
    let uniqueKey = Math.random();
      return (
        <div key={Math.random()}>
          <p className="event-date">{elem.date}</p>
          <EventCard
          id={elem.id}
          key={uniqueKey}
          type={elem.type}
          name={elem.name}
          date={elem.date}
          description={elem.description}
          time={elem.time}
          adult_required={elem.adultRequired}
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
