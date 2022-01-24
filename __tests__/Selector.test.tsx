import { fireEvent, render, screen } from "@testing-library/react"
import Selector from "@components/Selector"

const setOption = jest.fn()
const options = ["option 1", "option 2", "option 3"]
const role = "sortby-selector"

describe("<Selector />", () => {
    it("has rendered properly", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const selector = screen.getByRole("sortby-selector")
        expect(selector).toBeInTheDocument()
    })
    it("has renderd first item of options by default", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const firstOption = screen.getByText("option 1")
        expect(firstOption).toBeInTheDocument()
    })
    it("has drop down arrow icon", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const dropDownIcon = screen.getByRole("drop-down-icon")
        expect(dropDownIcon).toBeInTheDocument()
    })
    it("list is not visible initially", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const selectorList = screen.queryByRole(`sortby-selector-list`)
        expect(selectorList).not.toBeInTheDocument()
    })
    it("has toggle option to toggle list", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const toggleButton = screen.getByRole("button", { name: "option 1"})
        
        fireEvent.click(toggleButton)
        expect(screen.queryByRole(`sortby-selector-list`)).toBeInTheDocument()

        fireEvent.click(toggleButton)
        expect(screen.queryByRole(`sortby-selector-list`)).not.toBeInTheDocument()
    }) 
    it("diplays selected list item and list disappers", () => {
        render( <Selector   role={ role } 
                            options={ options } 
                            option={ options[0] } 
                            setOption={ setOption } />)
        const toggleButton = screen.getByRole("button", { name: "option 1"})
        fireEvent.click(toggleButton)
        expect(screen.queryByRole(`sortby-selector-list`)).toBeInTheDocument()
        const option2 = screen.getAllByRole("listitem").find(listitem => listitem.textContent === 'option 2')
        fireEvent.click(option2)
        expect(screen.queryByRole(`sortby-selector-list`)).not.toBeInTheDocument()
        expect(screen.getByRole("button", { name: "option 1"})).toBeInTheDocument
    }) 
})