import { render, screen } from "@testing-library/react"
import Feature from "@components/Feature"

describe("<Feature />", () => {
    it("has renderd properly", () => {
        render(<Feature />)
        const feature = screen.getByRole("feature")
        expect(feature).toBeInTheDocument()
    })
})