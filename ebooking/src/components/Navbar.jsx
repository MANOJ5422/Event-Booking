import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="navbar">
<h2>EVENT</h2>
<div>
<Link to="/">Find Events</Link>
<Link to="/my-bookings">My Bookings</Link>
</div>
</nav>
);
}