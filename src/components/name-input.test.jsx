import { test, vi, expect } from "vitest"
import {render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NameInput from "./NameInput"

test("calls submit handler with new value", async () => {
  const submitHandler = vi.fn()
  render(<NameInput value="something" handleSubmit={submitHandler} />)

  const testName = "bob"
  const testNumber = "0123456789"
  const inputName = screen.getByLabelText("name:")
  const inputNumber = screen.getByLabelText("number:")
  const submitButton = screen.getByText("add")
  
  await userEvent.type(inputName, testName)
  await userEvent.type(inputNumber, testNumber)
  await userEvent.click(submitButton)
  
  expect(submitHandler).toHaveBeenCalledWith(testName, testNumber)
})

