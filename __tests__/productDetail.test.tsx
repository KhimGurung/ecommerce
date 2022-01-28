import { render, screen } from "@testing-library/react"
import ProductDetail from "@components/ProductDetail"

const product = {
    name: "Product Name",
    brand: "New Balance",
    price: "39.00",
    shippingCost: "00.00",
    size: ["S","M","L","XL","XLL", "XLLL"],
    color: ["bg-red-500", "bg-black", "bg-green-500", "bg-blue-600"],
}

describe("<ProductDetail />", () => {
    it("has rendered properly", () => {
        render(<ProductDetail product={ product } />)
        const productDetail = screen.getByRole("product-detail")
        expect(productDetail).toBeInTheDocument()
    })
    it("has rendered rendered product name and price", () => {
        render(<ProductDetail product={ product } />)
        const productName = screen.getByText(/Product Name/i)
        expect(productName).toBeInTheDocument()
        const productPrice = screen.getByText(/39.00/i)
        expect(productPrice).toBeInTheDocument()
    })
    it("has rendered rendered prouduct size", () => {
        render(<ProductDetail product={ product } />)
        const productSize = screen.getByRole("product-size")
        expect(productSize).toBeInTheDocument()
    })
})