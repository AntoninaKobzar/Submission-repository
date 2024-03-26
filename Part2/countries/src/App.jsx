import axios from 'axios'
import { useEffect,useState } from 'react'


function App() {
const[countries,setCountries]=useState([]) 
const [searchTerm, setSearchTerm] = useState('');
const [selectedCountry, setSelectedCountry] = useState(null);

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


const renderCountryInfo = () => {
  if (selectedCountry) {
    return (
      <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Population: {selectedCountry.population}</p>
        <p>Languages: {Object.values(selectedCountry.languages).join(', ')}</p>
        <p>Flag: <img src={selectedCountry.flags.svg} alt="Country Flag" width='150' /></p>
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
