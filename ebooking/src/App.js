import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function App() {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<SearchResults />} />
<Route path="/my-bookings" element={<MyBookings />} />
</Routes>
</>
);
}
