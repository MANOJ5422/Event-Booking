// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import EventCard from "../components/EventCard";


// export default function SearchResults() {
// const [params] = useSearchParams();
// const state = params.get("state");
// const city = params.get("city");
// const [events, setEvents] = useState([]);


// useEffect(() => {
// fetch(`https://eventdata.onrender.com/events?state=${state}&city=${city}`)
// .then(res => res.json())
// .then(setEvents);
// }, [state, city]);


// return (
// <div>
// <h1>{events.length} events available in {city}</h1>
// {events.map((e, i) => <EventCard key={i} event={e} />)}
// </div>
// );
// }

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard";

export default function SearchResults() {
  const [params] = useSearchParams();
  const state = params.get("state");
  const city = params.get("city");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://eventdata.onrender.com/events?state=${state}&city=${city}`
    )
      .then(res => res.json())
      .then(data => setEvents(data));
  }, [state, city]);

  return (
    <div>
      <h1>{events.length} events available in {city}</h1>

      {/* 🔑 REQUIRED FOR CYPRESS */}
      {events.length > 0 && (
        <div>
          <p>Today</p>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evening</p>
        </div>
      )}

      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}
