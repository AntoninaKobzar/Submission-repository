import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const[number,setPhone]=useState('')
  const[searchResult,setSearchResult]=useState('')

const handleNameChange=(e)=>{
    setNewName(e.target.value)
  }
  const handleNumberChange=(e)=>{
    setPhone(e.target.value)
  }

const handleAddName=(e)=>{
  e.preventDefault();
  if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
    window.alert(`${newName} is already added to the phonebook`);
    return;
  }
      setPersons([...persons, { name: newName,number:number }])
      setNewName('')
      setPhone('')
    
    }


const handleSearchChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchResult(query);
};

const filteredPersons = persons.filter(person =>
  person.name.toLowerCase().includes(searchResult)
);
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={searchResult} onChange={handleSearchChange}/>
      <h2>add a new</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={number} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchResult?(<div>
        <ul>
        {filteredPersons.map((person)=>(
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
      </ul>
      </div>):
      (<div>
        <ul>
        {persons.map((person)=>(
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
      </ul>
      </div>)}
    </div>

  )
}

export default App
