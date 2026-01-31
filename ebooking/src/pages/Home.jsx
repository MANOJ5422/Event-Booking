import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    fetch("https://eventdata.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data));
  }, []);

  // Fetch cities when state is clicked
  useEffect(() => {
    if (selectedState) {
      fetch(`https://eventdata.onrender.com/cities/${selectedState}`)
        .then(res => res.json())
        .then(data => setCities(data));
    }
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        
        {/* STATE LIST */}
        <div id="state">
          <ul>
            {states.map((state) => (
              <li
                key={state}
                onClick={() => {
                  setSelectedState(state);
                  setSelectedCity("");
                }}
              >
                {state}
              </li>
            ))}
          </ul>
        </div>

        {/* CITY LIST */}
        <div id="city">
          <ul>
            {cities.map((city) => (
              <li
                key={city}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" id="searchBtn">
          Search
        </button>

      </form>
    </div>
  );
}
