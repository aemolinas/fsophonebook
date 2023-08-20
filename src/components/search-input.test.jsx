import { test, vi, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchInput from "./SearchInput"

test('calls change handler with a new value', async () => {

  const testSearchKey = 'Ar'

  const mockPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const handleSearchChange = (newVal) => {
    return (
      [mockPersons.filter((person) =>
        person.name.toLowerCase().includes(newVal.toLowerCase())
      )]
    )
  }

  console.log("Mock Persons: ", handleSearchChange(testSearchKey))

  const changeHandler = vi.fn(handleSearchChange)
  render(<SearchInput handleSearchChange={changeHandler} />)
  const inputValue = screen.getByLabelText('search:')
  console.log("inputValue", inputValue.toString())
  console.log('input value', screen.getByRole("textbox").toString())

  await userEvent.type(inputValue, testSearchKey)
  console.log('searchInput text: ', screen.getByRole("textbox").value)
  expect(changeHandler).toHaveBeenCalledWith(testSearchKey)
}) 