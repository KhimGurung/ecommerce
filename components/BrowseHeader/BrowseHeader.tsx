import React, { useState } from 'react'
import Selector from '@components/Selector'
import { BsSliders } from "react-icons/bs"

const options = ["Most Popular", "Newest", "Lowest Price", "Hightes Price", "Sale"]

interface IBrowserHeader {
    className?:string
}


const BrowseHeader = ({ className }: IBrowserHeader) => {
    const [option, setOption] = useState(options[0])

    const selectOption = (index: number) => {
      setOption(preVal => options[index])
    }
    return (
        <header className={`flex flex-col lg:flex-row justify-between lg:items-center ${className}`}>
            <h1 className="text-3xl font-bold mb-5 lg:mb-0">Men Pants - 29 results</h1>
            <div className="flex items-center justify-between">
                <label htmlFor="toggleFilter" className="sticky top-0 lg:hidden" id="labelForFilter">
                    <BsSliders className="text-2xl" />
                </label>
                <Selector   role="sortby" 
                            option={ option } 
                            setOption={ selectOption } 
                            options={ options }
                            className="w-[250px] border p-2 px-3" />
            </div>
        </header>
    )
}

export default BrowseHeader
