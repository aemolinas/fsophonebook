import { test, vi, expect, vitest } from "vitest"
import {render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NameOutput from './NameOutput'

test("outputs the list of names in the phonebook", () => {
    //To run a test we need a list of names to be output
    //Create a test variable testPersons
    
    const testPersons = [
        { 
            id: 0,
            name: 'BArto Hellas', 
        }
    ]
    
    //map only the names in testPerson into an array testNames

    //The test renders the component
    render(<NameOutput persons={testPersons} />)
    const testDiv = document.getElementById('outputDiv')
    console.log(testDiv)
    const testParagraphs = testDiv.getElementsByTagName('p')
    //console.log('testParagraphs', testParagraphs)
    const testOutNames = testParagraphs.innerTest
    console.log('testOutNames...', testOutNames);
    
    //It might be necessary to wait for all of the elements to be mapped
    //the component displays an array of paragraph tags with a single name in each tag
    //the test should extract the inner text (inner HTLM?) value of each <p> tag
    //the exprected value each paragraph tag should match a an element of the testPersons array 

})
