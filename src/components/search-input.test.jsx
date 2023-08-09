import { test, vi, expect } from "vitest"
import {render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NameFilter from "./SearchInput"

test('generates a search filter key from user input and passes it to a form', () => {
  //the name filter should be a an input field outside the contact submission form
  //it should dynamically accept user input and update the value of a useState hook called "???"
  //the filtered value should be used in an array.filter method on persons to produce a filtered list of persons
  //the filtered list should be what is passed to NameOutput
})