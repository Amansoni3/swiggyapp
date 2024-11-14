import { render, screen } from "@testing-library/react"
import Body from "../Body/Body"
import MOCK_DATA from "../../components/__tests__/mocks/mockResListData.json"
import "@test"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render the body component with search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const search = screen.getByRole("button", { name: "Search" })
    console.log(search,"search")
    expect(search).toBeInTheDocument()   
})