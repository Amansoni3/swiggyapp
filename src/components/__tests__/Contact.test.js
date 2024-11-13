import { render, screen } from "@testing-library/react"
import Contact from "../Contact/Contact"
import "@testing-library/jest-dom"

describe('Contact us page test cases', () => {
    it("Should load contact us component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    it("Should load button inside contact us component", () => {
        render(<Contact />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    it("Should load input inside contact us component", () => {
        render(<Contact />)
        const inputName = screen.getByPlaceholderText("Your Name")
        expect(inputName).toBeInTheDocument()
    })

});
