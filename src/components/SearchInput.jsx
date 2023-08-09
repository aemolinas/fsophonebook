const SearchInput = (props) => {

  return (
    <div>
    <label htmlFor="search">search: </label><input id="search" value={props.searchKey} onChange={props.handleChange} ></input>
    </div>
  )
}

export default SearchInput