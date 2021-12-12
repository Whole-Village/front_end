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
      const upcomingEvents = filterUpcomingEvents();
      sortUpcomingEventsAscending(upcomingEvents);
      setVillageEvents(upcomingEvents)
    }
  }, [data, setVillageEvents])

  const filterUpcomingEvents = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
      return data.events.filter((elem) => {
      return elem.date >= today;
    })
  }

  const sortUpcomingEventsAscending = (events) => {
    return events.sort((a,b) => {
      a = a.date.split('-').join('');
      b = b.date.split('-').join('');
      return a > b ? 1 : a < b ? -1 : 0;
    })
  }

  const eventCards = villageEvents.map((elem, i) => {
    let uniqueKey = new Date().getTime();
      return (
        <div key={i}>
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
      {eventCards.length < 1 ? <p>There are no upcoming events!</p> : eventCards}
    </div>
  )
}

export default Events;
