import React from 'react';
import noteService from '../services/persons'

const People = ({ persons,setPersons }) => {

const handleDelete=(id)=>{
noteService.deletePerson(id)
.then(()=>{
setPersons(persons.filter(person=>person.id!==id))
console.log('Person deleted successfully')
})
.catch((error)=>{
  console.error('Error deleting person:',error)
})

  }
  return (
    <>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => (
            <li key={person.id}>{person.name} {person.number}  <button onClick={handleDelete}>delete</button></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default People;