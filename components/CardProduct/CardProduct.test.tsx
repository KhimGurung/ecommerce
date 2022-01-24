import { render, screen } from "@testing-library/react"
import CardProduct from "./CardProduct"

const product =  {
    image: "https://via.placeholder.com/268x380",
    brand: "Bugatti",
    name: "Mercury T-shirt",
    price: "30"
  }

describe("<CardProduct />", () => {
    it("has rendered properly", () => {
        render(<CardProduct product={ product } />)
        const cardProduct = screen.getByRole("article")
        expect(cardProduct).toBeInTheDocument()
    })
    it("has rendered product details", () => {
        render(<CardProduct product={ product } />)
        const cardProduct = screen.getByRole("article")
        expect(screen.getByRole("img")).toHaveProperty("src", product.image)
        expect(screen.getByText(/Bugatti/i)).toBeInTheDocument()
        expect(screen.getByText(/30/i)).toBeInTheDocument()
        expect(screen.getByText(/Mercury T-shirt/i)).toBeInTheDocument()      
    })
})