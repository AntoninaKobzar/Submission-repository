import React, { useState,useEffect } from 'react';
import Filter from './components/Filter';
import AddPerson from './components/AddPerson';
import People from './components/People';
import Person from './components/Person';
import axios from 'axios'
import noteService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);

  const [searchResult, setSearchResult] = useState('');

  useEffect(()=>{
    noteService.getAll()
    .then(initialPersons=>{
    setPersons(initialPersons)
    })
  },[])
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
