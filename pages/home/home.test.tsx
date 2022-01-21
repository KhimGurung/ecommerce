import { render, screen } from '@testing-library/react'
import Home from './home'

describe('Home page', () => {
    it('contains <Header /> component', async () => {
        render(<Home />)
        const header = await screen.findByTestId("header")
        expect(header).toBeInTheDocument()
    })
})