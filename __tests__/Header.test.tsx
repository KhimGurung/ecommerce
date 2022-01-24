import { render, screen } from '@testing-library/react'
import Header from '@components/Header'

describe('Header', () => {
    it('has rendered properly', async () => {
        render(<Header />)
        const header = await screen.findByTestId("header")
        expect(header).toBeInTheDocument()
    })

    it('has header top bar', async () => {
        render(<Header />)
        const headerTopbar = await screen.findByTestId('header-top-bar')
        expect(headerTopbar).toBeInTheDocument()
    })

    it('has <HeaderSearchBar /> component', async () => {
        render(<Header />)
        const headerSearchBar = await screen.findByTestId('header-search-bar')
        expect(headerSearchBar).toBeInTheDocument()
    })
    it('has <NavBar /> component', async () => {
        render(<Header />)
        const navBar = await screen.findByRole('nav-bar')
        expect(navBar).toBeInTheDocument()
    })
})