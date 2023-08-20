import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import NameOutput from './NameOutput'

test("outputs the list of names in the phonebook", async () => {
  const testPersons = [
    { id: 0,
      name: 'foobar', 
      number: '00', }, 
    { id: 1,
      name: 'foo', 
      number: '11', },
    { id: 2,
      name: 'bar', 
      number: '22', }
  ]
  await render(<NameOutput persons={testPersons} />)
  const paragraphs = await (await screen.findAllByRole("paragraph")).map((paragraph) => paragraph.innerHTML)
  expect(paragraphs.length === testPersons.length).toBeTruthy()
})
