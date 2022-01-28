import { render, screen } from "@testing-library/react"
import Payment from "@components/Payment"

describe("<Payment />", () => {
    it("has rendered properly", () => {
        render(<Payment />)
        const payment = screen.getByRole("payment-option")
        expect(payment).toBeInTheDocument()
    })
})