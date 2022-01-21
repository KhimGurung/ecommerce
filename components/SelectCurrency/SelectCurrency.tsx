import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const currencies = ["USD", "EURO", "GBP", "INR", "NPR"]

function SelectCurrency() {
    const [currentCurrency, setCurrentCurrency] = useState(0)

    const selectCurrency = (index:number) => {
        setCurrentCurrency(preVal => index)
    }
    return (
        <section data-testid="currency" className="relative">
            <div className="flex items-center peer hover:cursor-pointer gap-3" >
                <p className="w-8">
                    { currencies[currentCurrency] }
                </p>
                <FiChevronDown />
            </div>
            <ul role="currency-list" className="absolute bg-slate-200 -mx-5 pt-3 peer-hover:block hover:block hidden">
                {
                    currencies.map((currency, index) => 
                        <li key={ index } className="px-5 pb-3 hover:cursor-pointer" 
                            onClick={ () => selectCurrency(index) }>
                            { currency }
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default SelectCurrency
