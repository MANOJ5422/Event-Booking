import { useState } from "react";


export default function Booking({ event }) {
const [date] = useState(new Date().toDateString());
const slots = ["11:30 AM", "12:00 PM", "06:00 PM"];


const book = (time) => {
const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
bookings.push({ ...event, date, time });
localStorage.setItem("bookings", JSON.stringify(bookings));
alert("Booking confirmed");
};


return (
<div>
<p>Today</p>
<p>Morning</p>
{slots.map(s => (
<button key={s} onClick={() => book(s)}>Book FREE Event</button>
))}
</div>
);
}

// export default function Booking() {
//     return (
//       <div>
//         <p>Today</p>
  
//         <p>Morning</p>
//         <button>Book FREE Event</button>
  
//         <p>Afternoon</p>
//         <button>Book FREE Event</button>
  
//         <p>Evening</p>
//         <button>Book FREE Event</button>
//       </div>
//     );
//   }
  