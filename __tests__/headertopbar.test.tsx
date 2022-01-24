import { render, screen } from '@testing-library/react'
import Head from 'next/head'
import HeaderTopBar from '@components/HeaderTopBar'

describe('HeaderTopBar', () => {
    it('has rendered properly', async () => {
        render(<HeaderTopBar />)
        const headerTopbar = await screen.findByTestId('header-top-bar')
        expect(headerTopbar).toBeInTheDocument()
    })

    it('', async () => {
        render(<HeaderTopBar />)
        const welcome = await screen.findByText('Welcome to Store')
        expect(welcome).toBeInTheDocument()

        const registerAndSignIn = await screen.findByText('Register or Sign In')
        expect(registerAndSignIn).toBeInTheDocument()

        const language = screen.getByRole('language')
        expect(language).toBeInTheDocument()

        const currency = screen.getByRole('currency')
        expect(currency).toBeInTheDocument()
    })
})