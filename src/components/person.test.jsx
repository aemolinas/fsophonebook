import { test, expect } from "vitest"
import Person from "./Person";
import { render, screen } from "@testing-library/react"

test("displays name based on props", () => {
    const name="bob"
    const number="12345-678910-1112"
    render(<Person name={name} number={number} />)

    expect(screen.getByText(`${name}: ${number}`)).toBeTruthy()
    
})