import { render, screen } from '@testing-library/react'
import NavBar from "@components/NavBar"

describe("<NavBar />", () => {
    it("has rendered properly", async () => {
        render(<NavBar />)
        const navBar = await screen.findByRole("nav-bar")
        expect(navBar).toBeInTheDocument()
    })
    it("has <Menu /> component", () => {
        render(<NavBar />)
        const menu = screen.getByRole("list")
        expect(menu).toBeInTheDocument()
    })
    it("has <CategoryMenu /> component", () => {
        render(<NavBar />)
        const categoryMenu = screen.getByRole("category-menu")
        expect(categoryMenu).toBeInTheDocument()
    })
})