import { render, screen } from "@testing-library/react"
import Footer from "@components/Footer"

describe("<Footer />", () => {
    it("has renderd properly", () => {
        render(<Footer />)
        const footer = screen.getByRole("footer")
        expect(footer).toBeInTheDocument()
    })
    it("has feature <Feature /> component", () => {
        render(<Footer />)
        const feature = screen.getByRole("feature")
        expect(feature).toBeInTheDocument()
    })
    it("has feature <Feature /> component", () => {
        render(<Footer />)
        const feature = screen.getByRole("quick-link")
        expect(feature).toBeInTheDocument()
    })
    it("has feature <Copyright /> component", () => {
        render(<Footer />)
        const feature = screen.getByRole("copyright")
        expect(feature).toBeInTheDocument()
    })
})