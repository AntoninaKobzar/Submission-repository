import React from 'react';

const Person = ({ persons }) => {
  return (
    <>
      <h2>Filtered Numbers</h2>
      <div>
        <ul>
          {persons.map(person => (
            <li key={person.id}>{person.name} {person.number} 
            
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Person;