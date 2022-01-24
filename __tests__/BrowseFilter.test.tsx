import { getAllByRole, render, screen } from "@testing-library/react"
import BrowseFilter from "@components/BrowseFilter"

describe("<BrowseFilter />", () => {
    it("has rendered properly", () => {
        render(<BrowseFilter />)
        const browse = screen.getByRole("browse-filter")
        expect(browse).toBeInTheDocument()
    })
    it("has gender filter <FilterGender /> component", () => {
        render(<BrowseFilter />)
        const filterGender = screen.getByRole("filter-gender")
        expect(filterGender).toBeInTheDocument()
    })
    it("has childern product filter <FilterChildren /> component", () => {
        render(<BrowseFilter />)
        const filterChildren = screen.getByRole("filter-children")
        expect(filterChildren).toBeInTheDocument()
    })
    it("has filter by price range <FilterPrice /> component", () => {
        render(<BrowseFilter />)
        const filterPrice = screen.getByRole("filter-price")
        expect(filterPrice).toBeInTheDocument()
    })
    it("has filter by size <FilterSize /> component", () => {
        render(<BrowseFilter />)
        const filterSize = screen.getByRole("filter-size")
        expect(filterSize).toBeInTheDocument()
    })
    it("has filter by product type <FilterProductType /> component", () => {
        render(<BrowseFilter />)
        const filterProductType = screen.getByRole("filter-product-type")
        expect(filterProductType).toBeInTheDocument()
    })
    it("has filter by brand <FilterBrand /> component", () => {
        render(<BrowseFilter />)
        const filterBrand = screen.getByRole("filter-brand")
        expect(filterBrand).toBeInTheDocument()
    })
    it("has filter by color <FilterColor /> component", () => {
        render(<BrowseFilter />)
        const filterColor = screen.getByRole("filter-color")
        expect(filterColor).toBeInTheDocument()
    })
    it("has filter by sales <FilterSale /> component", () => {
        render(<BrowseFilter />)
        const filterSale = screen.getByRole("filter-sale")
        expect(filterSale).toBeInTheDocument()
    })
})