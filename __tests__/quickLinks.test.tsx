import { render, screen } from "@testing-library/react"
import QuickLink from "@components/QuickLink"

describe("<QuickLink />", () => {
    it("has rendered properly", () => {
        render(<QuickLink />)
        const quickLink = screen.getByRole("quick-link")
        expect(quickLink).toBeInTheDocument()
    })
    it("has payment <Payment /> component", () => {
        render(<QuickLink />)
        const payment = screen.getByRole("payment-option")
        expect(payment).toBeInTheDocument()
    })
})