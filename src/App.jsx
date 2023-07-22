import { useState } from 'react' 
import Person from './components/Person'
import NameInput from './components/NameInput'

const App = () => {
  
  const [persons, setPersons] = useState([
    { id: 0,
      name: 'Arto Hellas' }
  ]) 

  const updatePhoneBook = (name) => {
    const nameInPhonebook = checkPhonebook(name.trim()) 
    if(!nameInPhonebook){
      createNewContact(name)
    }
    else {
      alertUser(result)
    }
  }

  const checkPhonebook = (name) => {
    if (name.length !== 0){
      const personInPhonebook = persons.find(
        person => person.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
      return !!personInPhonebook
    }
  }

  const createNewContact = (name) => {
        const newPerson = {
          id: persons.length + 1,  
          name
        }
        setPersons(persons.concat(newPerson)); //add the newPerson to persons
  }

  const alertUser = (result) => {
    if (result) {
      alert(`${newName} has already been added to the phone book.`)
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
        <NameInput handleSubmit={updatePhoneBook} />
        <div>
        {persons.map((person) => { 
            console.log("person", person)
            return(<Person key={person.id} name={person.name} />)
          }
         )}
       </div>
      <h2>Numbers</h2>
    </div>
  )
}

export default App