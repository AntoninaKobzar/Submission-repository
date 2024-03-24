import React, { useState } from 'react';
import Filter from './components/Filter';
import AddPerson from './components/AddPerson';
import People from './components/People';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [searchResult, setSearchResult] = useState('');

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
      <Filter searchResult={searchResult} handleSearchChange={handleSearchChange} />
      <AddPerson persons={persons} setPersons={setPersons} />
      {searchResult?
      (<Person persons={filteredPersons} />):
      (<People persons={persons} />)}
    </div>
  );
};

export default App;
