import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handleNameChange=(e)=>{
    setNewName(e.target.value)
   
  }

const handleAddName=(e)=>{
  e.preventDefault();
  for(const person of persons){
    if(person.name===newName){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('');
      return
    }else{
      setPersons([...persons, { name: newName }]);
      setNewName('');
    }
    }
   

}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
        {persons.map((person)=>(
        <li key={person.name}>{person.name}</li>
      ))}
      </ul>
      </div>
    </div>

  )
}

export default App
