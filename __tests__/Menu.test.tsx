import { render, screen } from "@testing-library/react"
import Menu from "@components/Menu"

const menuList = [
    {
        title: "About",
        link: "/"
    }, 
    {
        title: "Delivery",
        link: "/"
    }, 
    {
        title: "Return",
        link: "/"
    }, 
    {
        title: "Payments",
        link: "/"
    }, 
    {
        title: "Contact",
        link: "/"
    }
]

describe("<Menu />", () => {
    it("has rendered properly", async () => {
        render(<Menu menuList={ menuList } />)
        const menu = screen.getByRole("list")
        expect(menu).toBeInTheDocument()
    })

    it("has rendered the list sent as props", async () => {
        render(<Menu menuList={ menuList } />)
        const menuItems = screen.getAllByRole("listitem")
        expect(menuList.length).toEqual(menuList.length)

        const renderedMenuItems = menuItems.map(item => item.textContent)
        expect(renderedMenuItems).toEqual(menuList.map(menu => menu.title))

        const linkAbout = screen.getByRole("link", { name: "About"})
        expect(linkAbout).toHaveAttribute("href", "/")
    })
})