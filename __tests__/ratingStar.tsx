import { render, screen } from "@testing-library/react"
import RatingStar from "@components/RatingStar"

describe("<RatingStar />", () => {
    it("has rendered properly", () => {
        render(<RatingStar rating={3.5} />)
        const ratingStar = screen.getByRole("rating-star")
        expect(ratingStar).toBeInTheDocument()
    })
})