import { render, screen } from "@testing-library/react"
import Copyright from "@components/Copyright"

describe("<Copyright />", () => {
    it("has rendered properly", () => {
        render(<Copyright />)
        const copyright = screen.getByRole("copyright")
        expect(copyright).toBeInTheDocument()
    })
    it("has copyright year 2020", () => {
        render(<Copyright />)
        const year = screen.getByText(/2022/i)
        expect(year).toBeInTheDocument()
    })
    it("has menu <Menu /> component", () => {
        render(<Copyright />)
        const menu = screen.getByRole("list")
        expect(menu).toBeInTheDocument()
    })
})