import { render, screen, waitFor } from "@testing-library/react"
import List from "@components/List"

const list = ["List item 1", "List item 2", "List item 3"]

describe("<List />", () => {
    it("has rendered properly", () => {
        const fn = jest.fn()
        render(<List role="my-list" list={ list } selectListItem={ fn } />)
        const categoryList = screen.queryByRole("my-list")
        expect(categoryList).toBeInTheDocument()
    })
    it("has rendered list of items provided", async () => {
        const fn = jest.fn()
        render(<List role="" list={ list } selectListItem={ fn } />)
        expect(screen.getByText("List item 1")).toBeInTheDocument
        expect(screen.getByText("List item 2")).toBeInTheDocument
        expect(screen.getByText("List item 3")).toBeInTheDocument
    })
    it("renders all the list items", async () => {
        const fn = jest.fn()
        render(<List role="" list={ list } selectListItem={ fn } />)
        const listItems = screen.getAllByRole("listitem")
        expect(listItems.length).toBe(list.length)
    })
})