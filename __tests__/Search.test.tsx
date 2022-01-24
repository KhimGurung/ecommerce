import { render, screen, fireEvent } from "@testing-library/react"
import Search from "@components/Search"

describe("<Search />", () => {
    it("has rendered properly", async () => {
        render(<Search />)
        const search = await screen.findByTestId("search")
        expect(search).toBeInTheDocument()
    })
    it("has search text input", async () => {
        render(<Search />)
        const searchTextInput = await screen.findByPlaceholderText("Enter search text")
        expect(searchTextInput).toBeInTheDocument()
    })
    it("has search text input", async () => {
        render(<Search />)
        const searchTextInput = await screen.findByPlaceholderText("Enter search text")
        expect(searchTextInput).toBeInTheDocument()
    })
    it("has search icon button", () => {
        render(<Search />)
        const searchIconButton = screen.getByRole("search-button")
        expect(searchIconButton).toBeInTheDocument()
    })
    it("has no category list component", () => {
        render(<Search />)
        const categoryList = screen.queryByRole("category-list")
        expect(categoryList).not.toBeInTheDocument()
    })
    it("has toggle category list button and toggle the category list", () => {
        render(<Search />)
        const category = screen.getByRole('button')
        expect(category).toBeInTheDocument()

        fireEvent.click(category)
        const categoryList = screen.getByRole("category-list")
        expect(categoryList).toBeInTheDocument()

        fireEvent.click(category)
        expect(categoryList).not.toBeInTheDocument()
    })
    it("has selected category displayed", () => {
        render(<Search />)
        const category = screen.getByRole('button')

        fireEvent.click(category)
        const category1 = screen.getByText("Category 1")

        fireEvent.click(category1)
        const categoryList = screen.queryByRole("category-list")
        expect(categoryList).not.toBeInTheDocument()

        expect(screen.getByText("Category 1")).toBeInTheDocument()
    })
})