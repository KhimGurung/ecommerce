import { render, screen } from '@testing-library/react'
import SelectLanguage from './SelectLanguage'

describe('SelectLanguage', () => {
    it('has rendered properly', async () => {
        render(<SelectLanguage />)
        const selectLanguage = await screen.findByTestId("language")
        expect(selectLanguage).toBeInTheDocument()
    })
})