import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [state, setState] = useState("");
const [city, setCity] = useState("");
const navigate = useNavigate();


useEffect(() => {
fetch("https://eventdata.onrender.com/states")
.then(res => res.json())
.then(setStates);
}, []);


useEffect(() => {
if (state) {
fetch(`https://eventdata.onrender.com/cities/${state}`)
.then(res => res.json())
.then(setCities);
}
}, [state]);


const handleSearch = (e) => {
e.preventDefault();
navigate(`/search?state=${state}&city=${city}`);
};


return (
<form onSubmit={handleSearch} className="search-box">
<div id="state">
<select value={state} onChange={e => setState(e.target.value)} required>
<option value="">Select State</option>
{states.map(s => <option key={s} value={s}>{s}</option>)}
</select>
</div>


<div id="city">
<select value={city} onChange={e => setCity(e.target.value)} required>
<option value="">Select City</option>
{cities.map(c => <option key={c} value={c}>{c}</option>)}
</select>
</div>


<button type="submit" id="searchBtn">Search</button>
</form>
);
}