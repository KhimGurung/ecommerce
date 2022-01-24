import { render, screen } from "@testing-library/react"
import HeaderSearchBar from "@components/HeaderSearchBar"

describe("<HeaderSearchBar />", () => {
    it('has rendered properly', async () => {
        render(<HeaderSearchBar />)
        const headerSearchBar = await screen.findByTestId('header-search-bar')
        expect(headerSearchBar).toBeInTheDocument()
    })
    it('has <Logo /> component', async () => {
        render(<HeaderSearchBar />)
        const logo = await screen.findByTestId('logo')
        expect(logo).toBeInTheDocument()
    })
    it('has <Search /> component', async () => {
        render(<HeaderSearchBar />)
        const search = await screen.findByTestId('search')
        expect(search).toBeInTheDocument()
    })
    it('has <WishList /> component', async () => {
        render(<HeaderSearchBar />)
        const wishList = await screen.findByTestId('wish-list')
        expect(wishList).toBeInTheDocument()
    })
    it('has <BagItem /> component', async () => {
        render(<HeaderSearchBar />)
        const bagItems = await screen.findByTestId('bag-items')
        expect(bagItems).toBeInTheDocument()
    })
})