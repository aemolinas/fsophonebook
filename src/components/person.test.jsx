import { test, expect } from "vitest"
import Person from "./Person";
import { render, screen } from "@testing-library/react"

test("displays name based on props", () => {
    const name="bob"
    render(<Person name={name} />)

    expect(screen.getByText(name)).toBeTruthy()
})