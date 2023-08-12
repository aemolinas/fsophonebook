import { test, vi, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchInput from "./SearchInput"

test('calls change handler with a new value', async () => {
  const changeHandler = vi.fn()
  render(<SearchInput value='' handSubmit={changeHandler} />)
  const testSearchKey = 'Arto Hellas'
  const inputValue = screen.getByLabelText('')
  await userEvent.type(inputValue, testSearchKey)
  expect(changeHandler).toHaveBeenNthCalledWith(testSearchKey)  
} ) 