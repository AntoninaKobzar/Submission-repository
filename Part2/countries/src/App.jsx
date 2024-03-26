import axios from 'axios'
import { useEffect,useState } from 'react'


function App() {
const[countries,setCountries]=useState([]) 
const [searchTerm, setSearchTerm] = useState('');

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
}
const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
);

const renderCountries = () => {
  if (filteredCountries.length === 0) {
    return <p>No countries found.</p>;
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify your search.</p>;
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Languages: {Object.values(country.languages).map((language, index) => (
        <span key={index}>{language}</span>
        ))}</p>
        <p>Flag: <img src={country.flags.svg} alt="Country Flag"  width='150'/></p>
      </div>
    );
  } else {
    return (
      <ul>
        {filteredCountries.map(country => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  }
};
  return (
    <>
      <h2>find countries</h2>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      <div>{renderCountries()}</div>
    </>
  )
}

export default App
