import React, { useState } from 'react'
import Selector from "@components/Selector"

import './headertopbar.module.scss'

const currencies = ["USD", "EURO", "GBP", "INR", "NPR"]
const languages = ["English", "German"]

const HeaderTopBar = () => {
    const [currency, setCurrency] = useState(currencies[0])
    const [currentLanguage, setCurrentLanguage] = useState(languages[0])

    const selectCurrency = (index: number) => {
        setCurrency(preVal => currencies[index])
    }

    const selectLanguage = (index: number) => {
        setCurrentLanguage(preVal => languages[index])
    }
    return (
        <section    data-testid="header-top-bar" 
                    id="header-top-bar"
                    className="bg-slate-200 p-2 text-sm font-light  hidden md:block">
            <div className="container flex justify-between">
                <p>Welcome to Store</p>
                <div className="flex gap-2">
                    <div className="pr-4">
                        Register or Sign In
                    </div>
                    <span className="w-1 w-px bg-slate-400" />
                    <Selector   role="language" 
                                option={ currentLanguage } 
                                setOption={ selectLanguage } 
                                options={ languages }
                                className="px-4 font-light" />
                    <span className="w-1 w-px bg-slate-400" />
                    <Selector   role="currency" 
                                option={ currency } 
                                setOption={ selectCurrency } 
                                options={ currencies }
                                className="px-4 font-light" />
                </div>
            </div>
        </section>
    )
}

export default HeaderTopBar
