import React, { useState, useEffect, useRef } from 'react'
import { FiChevronDown } from "react-icons/fi"
import List from "@components/List"

interface ISelector {
    className?: string,
    role: string,
    options: string[],
    option: string,
    setOption: Function
}

const Selector = ({ role, options, option, setOption, className }: ISelector) => {
    const [listVisible, setListVisible] = useState(false)
    const selectorRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const toggleList = () => {
        setListVisible(preVal => !preVal)
    }
    const selectListItem = (index: number) => {
        setOption(index)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e:any) => {
            if(listVisible && selectorRef.current && !buttonRef.current?.contains(e.target)){
                toggleList()
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [listVisible])

    return (
        <section role={ role } className="relative max-w-fit" ref={ selectorRef }>
            <button onClick={ toggleList } 
                    className={`flex gap-2 items-center justify-between ${className}`}
                    ref={ buttonRef }>
                { option }
                <FiChevronDown role="drop-down-icon" />
            </button>
            {
                listVisible &&
                    <List role={`${role}-list`} list={ options } selectListItem={ selectListItem } />
            }
        </section>
    )
}

export default Selector
