import { render, screen } from "@testing-library/react"
import ProductImage from "@components/ProductImage"

const images = [
    "https://picsum.photos/360/430",
    "https://picsum.photos/360/430",
    "https://picsum.photos/360/430",
    "https://picsum.photos/360/430",
    "https://picsum.photos/360/430"
]

describe("<ProductImage />", () => {
    it("has rendered properly", () => {
        render(<ProductImage images={ images } />)
        const productImage = screen.getByRole("product-image")
        expect(productImage).toBeInTheDocument()
    })
    it("has rendered thumbnail image images provided", () => {
        render(<ProductImage images={ images } />)
        const productImages = screen.getAllByRole("img")
        expect(productImages.length).toBe(10)
    })
})