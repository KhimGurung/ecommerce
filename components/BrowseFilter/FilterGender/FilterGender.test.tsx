import { render, screen } from "@testing-library/react"
import FilterGender from "./FilterGender"

describe("<FilterGender />", () => {
    it("has rendered properly", () => {
        render(<FilterGender />)
        const filterGender = screen.getByRole("filter-gender")
        expect(filterGender).toBeInTheDocument()
    })
    it("has rendered checkbox and label for gender", () => {
        render(<FilterGender />)
        const checkbox = screen.getAllByRole("checkbox")
        expect(checkbox.length).toBe(2)
        expect(screen.getByText("Men")).toBeInTheDocument()
        expect(screen.getByText("Women")).toBeInTheDocument()
    })
})