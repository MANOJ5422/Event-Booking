import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    fetch("https://eventdata.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data));
  }, []);

  // Fetch cities after clicking a state
  useEffect(() => {
    if (state) {
      fetch(`https://eventdata.onrender.com/cities/${state}`)
        .then(res => res.json())
        .then(data => setCities(data));
    }
  }, [state]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?state=${state}&city=${city}`);
  };

  return (
    <form onSubmit={handleSearch}>

      {/* STATE DROPDOWN */}
      <div
        id="state"
        style={{ minHeight: "40px", border: "1px solid #ccc" }}
      >
        <ul>
          {states.map((s) => (
            <li
              key={s}
              onClick={() => {
                setState(s);
                setCity("");
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* CITY DROPDOWN */}
      <div
        id="city"
        style={{ minHeight: "40px", border: "1px solid #ccc" }}
      >
        <ul>
          {cities.map((c) => (
            <li
              key={c}
              onClick={() => setCity(c)}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" id="searchBtn">
        Search
      </button>

    </form>
  );
}
