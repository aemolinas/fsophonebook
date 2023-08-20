import Person from './Person'

const NameOutput = (props) => {
  console.log("NameOutput props", props)
  return(
    <div id="outputDiv">
      {props.persons.map(
          (person) => <Person key={person.id} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default NameOutput

