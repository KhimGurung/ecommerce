import { fireEvent, render, screen } from '@testing-library/react'
import CategoryMenu from "./CategoryMenu"

describe("<CategoryMenu />", () => {
    it("has rendered properly", () => {
        render(<CategoryMenu className="" />)
        const categoryMenu = screen.getByRole("category-menu")
        expect(categoryMenu).toBeInTheDocument()
    })
    it("has icon for all category and lable as All Categories", () => {
        render(<CategoryMenu className="" />)
        const allCategoryIcon = screen.getByRole("all-category-icon")
        expect(allCategoryIcon).toBeInTheDocument()

        const allCategoriesText = screen.getByText("All Categories")
        expect(allCategoriesText).toBeInTheDocument()
    })
    it("has <CategoryList /> component", () => {
        render(<CategoryMenu className="" />)
        const categoryList = screen.queryByRole("category-list")
        expect(categoryList).not.toBeInTheDocument()
    })
    it("toggles category list modal", () => {
        render(<CategoryMenu className="" />)
        const categoryMenu = screen.getByRole("category-menu")

        const categoryList = screen.queryByRole("category-list")
        expect(categoryList).not.toBeInTheDocument()

        fireEvent.click(categoryMenu)
        expect(screen.getByRole("category-list")).toBeInTheDocument()

        fireEvent.click(categoryMenu)
        expect(screen.queryByRole("category-list")).not.toBeInTheDocument()
    })
})