// import { useState } from "react";
// import Booking from "./Booking";

// export default function EventCard({ event }) {
//   const [showBooking, setShowBooking] = useState(false);

//   return (
//     <div
//       className="event-card"
//       onClick={() => setShowBooking(true)}
//     >
//       <h3>{event.eventName}</h3>
//       <p>{event.address}</p>
//       <p>{event.city}, {event.state}</p>

//       {showBooking && <Booking event={event} />}
//     </div>
//   );
// }









import Booking from "./Booking";


export default function EventCard({ event }) {
return (
<div className="event-card">
<h3>{event.eventName}</h3>
<p>{event.address}</p>
<p>{event.city}, {event.state}</p>
<p>⭐ {event.rating}</p>
<Booking event={event} />
</div>
);
}