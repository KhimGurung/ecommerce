import { render, screen } from "@testing-library/react"
import Browse from "../pages/browse"

describe("<Browse />", () => {
    it("has rendered properly", () => {
        render(<Browse />)
        const browse = screen.getByRole("main")
        expect(browse).toBeInTheDocument()
    })
    it("has rendered browse filter component", () => {
        render(<Browse />)
        const filter = screen.getByRole("browse-filter")
        expect(filter).toBeInTheDocument()
    })
})