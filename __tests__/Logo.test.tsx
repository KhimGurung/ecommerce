import { render, screen } from '@testing-library/react'
import Logo from '@components/Logo'

describe('<Logo />', () => {
    it('has rendered properly', async () => {
        render(<Logo />)
        const logo = await screen.findByTestId("logo")
        expect(logo).toBeInTheDocument()
    })

    it('has logo heading', async () => {
        render(<Logo />)
        const logoHeading =  await screen.findByRole('heading', {
            name: "STORE"
        })

    })
})