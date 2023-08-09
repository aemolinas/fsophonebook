const Person = (props) => {
  return(
    <p role="paragraph">{`${props.name}: ${props.number}`}</p>
  )
}
export default Person