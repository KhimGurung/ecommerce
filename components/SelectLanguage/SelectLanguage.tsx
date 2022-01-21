import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const languages = ["English", "German"]

function SelectLanguage() {
    const [currentLanguage, setCurrentLanguage] = useState(0)

    const selectLanguage = (index) => {
        setCurrentLanguage(preVal => index)
    }
    return (
        <section data-testid="language" className="relative">
            <div className="flex items-center peer hover:cursor-pointer gap-2">
                <p className="w-12">
                    { languages[currentLanguage] }
                </p>
                <FiChevronDown />
            </div>
            <ul className="absolute bg-slate-200 -mx-5 pt-3 hidden peer-hover:block hover:block  ">
                {
                    languages.map((language, index) => 
                        <li key={ index } className="px-5 pb-3 hover:cursor-pointer" 
                            onClick={ () => selectLanguage(index) }>
                            { language }
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default SelectLanguage
