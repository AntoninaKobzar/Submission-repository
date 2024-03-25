import React from 'react'
import { useState } from 'react';
import noteService from '../services/persons'

const AddPerson = ({persons,setPersons}) => {
    
    const [newName, setNewName] = useState('')
    const[number,setPhone]=useState('')
   
    const handleNameChange=(e)=>{
      setNewName(e.target.value)
     
    }
    const handleNumberChange=(e)=>{
      setPhone(e.target.value)
    }
  
  const handleAddName=(e)=>{
    e.preventDefault();
    const personObject={
      name:newName,
      number:number
    }
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      window.alert(`${newName} is already added to the phonebook`);
      return;
    }
    noteService.create(personObject)
    .then(returnedPerson=>{
      setPersons(persons.concat(returnedPerson))
      setNewName('')
        setPhone('')
    })
      }
  
  return (
    <div>
      <h2>Add a New Contact</h2>
      <form onSubmit={handleAddName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;