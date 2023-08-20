import { useState } from 'react'

const NameInput = (props) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //updates the value of the input field dynamically by setting newName
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //updates the value of the input field dynamically by setting newName
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const clearInput = () => {
    setNewName('');
    setNewNumber('');
  }

  const handleClick = () => {
    props.handleSubmit(newName, newNumber)
    clearInput()
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" >name:</label> <input id="name" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="number" >number:</label> <input id="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="button" onClick={handleClick} >add</button>
      </div>
    </form>)
}

export default NameInput