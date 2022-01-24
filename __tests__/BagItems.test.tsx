import { render, screen } from "@testing-library/react"
import BagItems from "@components/BagItems"

describe("<BagItems />", () => {
    it("has rendered properly", async () => {
        render(<BagItems />)
        const wishList = await screen.findByTestId("bag-items")
        expect(wishList).toBeInTheDocument()
    })
    it("has icon for my bag", () => {
        render(<BagItems />)
        const bagItemsIcon = screen.getByRole("my-bag-icon")
        expect(bagItemsIcon).toBeInTheDocument()
    })
    it("has label My Bag", () => {
        render(<BagItems />)
        const myBag = screen.getByText("My Bag")
        expect(myBag).toBeInTheDocument()
    })
})