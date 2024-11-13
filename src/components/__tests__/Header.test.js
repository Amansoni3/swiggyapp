import { Provider } from "react-redux"
import Header from "../Header/Header"
import appStore from "../../utlis/appStore"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
})

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: "Login" })
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole('button' , {name:'Logout'})
    expect(logoutButton).toBeInTheDocument()
})