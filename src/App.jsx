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

  const [searchKey, setSearchKey] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [showAll, setShowAll] = useState(true)

  const updatePhoneBook = (name, number) => {
    console.log("update number", number);
    const nameInPhonebook = checkPhonebook(name.trim())
    if (name.length !== 0){ 
      if(!nameInPhonebook){
        createNewContact(name, number)
      }
      else {
        alert(`${name} has already been added to the phone book.`)
      }
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
      number : number,
    }
    setPersons(persons.concat(newPerson)); 
  }

  const handleSearchChange = (e) => {
    const newKey = e.target.value
    setSearchKey(newKey)
    const filter = newKey 
    ? persons.filter((person) => { 
      if(person.name.toLowerCase().includes(newKey.toLowerCase())) return person
      else return ''
    })
    : persons
    console.log("filter", filter)
    setPersonsToShow(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchInput searchKey={searchKey} handleChange={handleSearchChange} />
      <h2>Add Contact</h2>
      <NameInput handleSubmit={updatePhoneBook} />
      <h2>Numbers</h2>
      <NameOutput persons={personsToShow}  />
    </div>
  )
}

export default App