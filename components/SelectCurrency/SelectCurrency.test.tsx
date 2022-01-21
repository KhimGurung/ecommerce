import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { not } from 'react-native-reanimated'
import SelectCurrency from './SelectCurrency'

describe('<SelectCurrency />', () => {
    it('has rendered properly', async () => {
        render(<SelectCurrency />)
        const selectCurrency = await screen.findByTestId("currency")
        expect(selectCurrency).toBeInTheDocument()
    })
    it('toggle currency list on mouse over', async () => {
        render(<SelectCurrency />)
        const selectCurrency = await screen.findByTestId("currency")
        const currencyList = screen.getByRole("currency-list")
        // const style = window.getComputedStyle(currencyList)
        // expect(style.display).toBe('none')
        // expect(currencyList).toHaveStyle("display: none")
        // expect(currencyList).not.toBeVisible()

        // fireEvent.mouseOver(selectCurrency)
        // await waitFor(() => screen.queryByRole("currency-list"))
        // expect(screen.queryByRole("currency-list")).toBeInTheDocument()
    })
})