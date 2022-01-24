import content from '*.png'
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi"

interface IAccordian {
    title: string,
    children?: any
}

const Accordian = ({ title, children }: IAccordian) => {
    const [contentVisible, setContentVisible] = useState(true)
    const toggleContent = () => {
        setContentVisible(preVal => !preVal)
    }
    return (
        <section role="accordian">
            <header onClick={ toggleContent } className="flex py-2 items-center justify-between hover:cursor-pointer">
                <h3 className="text-xl">{ title }</h3>
                <FiChevronDown className={`text-2xl transition-transform duration-200 ${ contentVisible ? "rotate-180" : "rotate-0"}`} />
            </header>
            <div className={ `transition-all duration-200  ${contentVisible ? "pt-2 pb-6 h-auto opacity-1" : "h-0 overflow-hidden opacity-0"}`}>
                { children }
            </div>
        </section>
    )
}

export default Accordian
