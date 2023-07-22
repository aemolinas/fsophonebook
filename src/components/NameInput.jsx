import { useState } from 'react' 

const NameInput = (props) => {
    const [newName, setNewName] = useState('')

      //updates the value of the input field dynamically by setting newName
     const handleNameChange = (event) => {
    setNewName(event.target.value) 
  }
  
  const clearInput = () =>{
    setNewName('');
  }

  const handleClick = () => {
    props.handleSubmit(newName)
    clearInput()
  }

    return( 
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" >name:</label> <input id="name" value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="button" onClick={handleClick} >add</button>
        </div>
      </form>)
}

export default NameInput