import axios from 'axios'
import { useEffect,useState } from 'react'
import.meta.env.VITE_SOME_KEY


function App() {
const[countries,setCountries]=useState([]) 
const [searchTerm, setSearchTerm] = useState('');
const [selectedCountry, setSelectedCountry] = useState(null);
const[weather,setWeather]=useState(null)
const api_key = import.meta.env.VITE_SOME_KEY
useEffect(()=>{
  axios.get('https://restcountries.com/v3.1/all')
  .then(response=>{
    setCountries(response.data)
  })
  .catch(error => {
    console.error('Error fetching countries data:', error);
  });
},[])
const handleSearch=(e)=>{
setSearchTerm(e.target.value)
setSelectedCountry(null);
}
const handleCountryInfo = country => {
  setSelectedCountry(country);
};
const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
);
useEffect(() => {
  if (selectedCountry) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(selectedCountry.capital)}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
}, [selectedCountry]);

const renderCountryInfo = () => {
  
  if (selectedCountry) {
    return (
      <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Population: {selectedCountry.population}</p>
        <p>Languages: {Object.values(selectedCountry.languages).join(', ')}</p>
        <p>Flag: <img src={selectedCountry.flags.svg} alt="Country Flag" width='150' /></p>
        
        {weather && (
          <div>
            <h3>Weather in {selectedCountry.capital}</h3>
            <p>Description: {weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp} K</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

return (
  <>
    <h2>Find countries</h2>
    <input type="text" onChange={handleSearch} value={searchTerm} />
    <div>
      {filteredCountries.length > 10 ? (
        <p>Too many matches, please specify your search.</p>
      ) : (
        <>
          <ul>
            {filteredCountries.map(country => (
              <li key={country.cca3}>
                {country.name.common}{' '}
                <button onClick={() => handleCountryInfo(country)}>Show</button>
              </li>
            ))}
          </ul>
          {renderCountryInfo()}
        </>
      )}
    </div>
  </>
);
}
export default App
