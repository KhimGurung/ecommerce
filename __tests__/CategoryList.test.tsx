import { render, screen, waitFor } from "@testing-library/react"
import CategoryList from "@components/CategoryList"

const list = ["Category 1", "Category 2", "Category 3"]

describe("<CategoryList />", () => {
    it("has rendered properly", () => {
        const fn = jest.fn()
        render(<CategoryList categoryList={ list } selectCategory={ fn } />)
        const categoryList = screen.queryByRole("category-list")
        expect(categoryList).toBeInTheDocument()
    })
    it("has rendered list of category provided", async () => {
        const fn = jest.fn()
        render(<CategoryList categoryList={ list } selectCategory={ fn } />)
        expect(screen.getByText("Category 1")).toBeInTheDocument
        expect(screen.getByText("Category 2")).toBeInTheDocument
        expect(screen.getByText("Category 3")).toBeInTheDocument
    })
})