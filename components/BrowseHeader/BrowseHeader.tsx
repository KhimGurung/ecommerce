import React, { useState } from 'react'
import Selector from '@components/Selector'
import { BsSliders } from "react-icons/bs"

const options = ["Most Popular", "Newest", "Lowest Price", "Hightes Price", "Sale"]


const BrowseHeader = () => {
    const [option, setOption] = useState(options[0])

    const selectOption = (index: number) => {
      setOption(preVal => options[index])
    }
    return (
        <header className="flex flex-col lg:flex-row justify-between lg:items-center">
            <h1 className="text-3xl font-bold mb-5 lg:mb-0">Men Pants - 29 results</h1>
            <div className="flex items-center justify-between">
                <BsSliders className="lg:hidden text-2xl" />
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
