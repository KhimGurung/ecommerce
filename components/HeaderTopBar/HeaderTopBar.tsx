import React from 'react'
import SelectLanguage from "@components/SelectLanguage"
import SelectCurrency from "@components/SelectCurrency"

import './headertopbar.module.scss'

const HeaderTopBar = () => {
    return (
        <section    data-testid="header-top-bar" 
                    id="header-top-bar"
                    className="bg-slate-200 p-2 text-sm font-light  hidden md:block">
            <div className="container flex justify-between">
                <p>Welcome to Store</p>
                <div className="flex gap-8">
                    <div>
                        Register or Sign In
                    </div>
                    <span className="w-1 w-px bg-slate-400" />
                    <SelectLanguage />
                    <span className="w-1 w-px bg-slate-400" />
                    <SelectCurrency />       
                </div>
            </div>
        </section>
    )
}

export default HeaderTopBar
