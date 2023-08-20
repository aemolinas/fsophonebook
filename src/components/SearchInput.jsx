import { useState } from "react"

const SearchInput = (props) => {
  const [searchKey, setSearchKey] = useState('')

  const handleChange = (e) => {
    const newKey = e.target.value
    setSearchKey(newKey)
    props.handleSearchChange(newKey)
  }
  return (
    <div>
      <label htmlFor="search">search: </label><input id="search" value={searchKey} onChange={handleChange} ></input>
    </div>
  )
}

export default SearchInput