import { useState } from 'react' 
import NameInput from './components/NameInput'
import NameOutput from './components/NameOutput'

const App = () => {
  
  const [persons, setPersons] = useState([
    { id: 0,
      name: 'Arto Hellas',
      number: '12345-678910-1112' }
  ]) 

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

  return (
    <div>
      <h2>Phonebook</h2>
      <NameInput handleSubmit={updatePhoneBook} />
      <NameOutput persons={persons}/>
      <h2>Numbers</h2>
    </div>
  )
}

export default App