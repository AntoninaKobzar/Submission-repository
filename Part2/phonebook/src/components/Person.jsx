import React from 'react';
import noteService from '../services/persons';

const Person = ({ persons, setPersons }) => {

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
    noteService.deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
        console.log('Person deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting person:', error);
      });
    }
  };

  return (
    <>
      <h2>Filtered Numbers</h2>
      <div>
        <ul>
          {persons.map(person => (
            <li key={person.id}>{person.name} {person.number} 
            <button onClick={() => handleDelete(person.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Person;