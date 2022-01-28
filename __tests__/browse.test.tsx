import { render, screen } from "@testing-library/react"
import Browse from "../pages/browse"

describe("<Browse />", () => {
    it("has rendered properly", () => {
        render(<Browse />)
        const pageTemplate = screen.getByRole("page-template")
        expect(pageTemplate).toBeInTheDocument()
    })
    it("has rendered browse filter component", () => {
        render(<Browse />)
        const filter = screen.getByRole("browse-filter")
        expect(filter).toBeInTheDocument()
    })
    it("has rendered footer component", () => {
        render(<Browse />)
        const footer = screen.getByRole("footer")
        expect(footer).toBeInTheDocument()
    })
})