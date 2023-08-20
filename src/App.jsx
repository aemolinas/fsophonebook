import { useState } from 'react'
import NameInput from './components/NameInput'
import NameOutput from './components/NameOutput'
import SearchInput from './components/SearchInput'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [personsToShow, setPersonsToShow] = useState(persons)

  const updatePhoneBook = (name, number) => {
    console.log("update number", number);
    if (name.length === 0) {
      return
    }
    const nameInPhonebook = checkPhonebook(name.trim())
    if (!nameInPhonebook) {
      const newPerson = createNewContact(name, number)
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons);
      setPersonsToShow(newPersons)
    }
    else {
      alert(`${name} has already been added to the phone book.`)
    }

  }

  const checkPhonebook = (name) => {
    const personInPhonebook = persons.find(
      person => person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
    return !!personInPhonebook
  }

  const createNewContact = (name, number) => {
    const newPerson = {
      id: persons.length + 1,
      name,
      number: number,
    }
    return newPerson
  }

  const handleSearchChange = (newVal) => {
    function peopleSearchFilter(person) {
      console.log("newVal in filter", newVal)
      return person.name.toLowerCase().includes(newVal.toLowerCase())
    }
    setPersonsToShow(
      [...persons.filter(peopleSearchFilter)]
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchInput handleSearchChange={handleSearchChange} />
      <h2>Add Contact</h2>
      <NameInput handleSubmit={updatePhoneBook} />
      <h2>Numbers</h2>
      <NameOutput persons={personsToShow} />
    </div>
  )
}

export default App