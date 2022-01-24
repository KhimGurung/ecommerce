import { render, screen } from "@testing-library/react"
import Accordian from "./Accordian"

describe("<Accordian />", () => {
    it("has rendered properly", () => {
        render(<Accordian title="" />)
        const accordian = screen.getByRole("accordian")
        expect(accordian).toBeInTheDocument()
    })
    it("has rendered given title", () => {
        render(<Accordian title="Title" />)
        const accordianTitle = screen.getByRole("heading", { name: "Title"})
        expect(accordianTitle).toBeInTheDocument()
    })
    it("has rendered given child elements", () => {
        render(<Accordian title="Title"><h2>this is tesing heading</h2> </Accordian>)
        const accordianChildren = screen.getByRole("heading", { name: "this is tesing heading"})
        expect(accordianChildren).toBeInTheDocument()
    })
})