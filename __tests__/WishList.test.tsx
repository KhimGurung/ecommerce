import { render, screen } from "@testing-library/react"
import WishList from "@components/WishList"

describe("<WishList />", () => {
    it("has rendered properly", async () => {
        render(<WishList />)
        const wishList = await screen.findByTestId("wish-list")
        expect(wishList).toBeInTheDocument()
    })
    it("has icon for wish list", () => {
        render(<WishList />)
        const wishListIcon = screen.getByRole("wish-list-icon")
        expect(wishListIcon).toBeInTheDocument()
    })
    it("has label My Wishes", () => {
        render(<WishList />)
        const myWishes = screen.getByText("My Wishes")
        expect(myWishes).toBeInTheDocument()
    })
})