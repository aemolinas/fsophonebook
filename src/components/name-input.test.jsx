import { test, vi, expect } from "vitest"
import {render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NameInput from "./NameInput"

test("calls submit handler with new value", async () => {
    const submitHandler = vi.fn()
    render(<NameInput value="something" handleSubmit={submitHandler} />)
    
    const testName = "bob"
    const input = screen.getByLabelText("name:")
    const submitButton = screen.getByText("add")
    await userEvent.type(input, testName)
    await userEvent.click(submitButton)

    expect(submitHandler).toHaveBeenCalledWith(testName)
})