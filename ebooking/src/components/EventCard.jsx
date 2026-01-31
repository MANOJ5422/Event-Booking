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