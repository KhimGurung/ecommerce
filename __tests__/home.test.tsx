import { render, screen } from '@testing-library/react'
import Home from '../pages/home'

describe('Home page', () => {
    it('contains <Header /> component', () => {
        render(<Home />)
        const header = screen.getByRole("banner")
        expect(header).toBeInTheDocument()
    })
    it('contains <Footer /> component', () => {
        render(<Home />)
        const footer = screen.getByRole("footer")
        expect(footer).toBeInTheDocument()
    })
    it('contains <Banner /> component', () => {
        render(<Home />)
        const banner = screen.getByRole("banner")
        expect(banner).toBeInTheDocument()
    })
})