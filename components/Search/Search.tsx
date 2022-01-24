import React, { useState, useRef, useEffect } from 'react'
import CategoryList from '@components/CategoryList';
import { FiSearch } from "react-icons/fi";

const categoryList = ["Category 1", "Category 2", "Category 3"]

interface search{
    className: string
}

const Search = ({ className }: search) => {
    const [selectedCategory, setSelectedCategory] = useState("Category")
    const [categoryListVisible, setCategoryListVisible] = useState(false)
    const categoryRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const toggleCategoryList = () => {
        setCategoryListVisible(preVal => !preVal)
    }

    const selectCategory = (category: string) => {
        setSelectedCategory(preVal => category)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e:any) => {
            if(categoryListVisible && categoryRef.current && !buttonRef.current?.contains(e.target)){
                toggleCategoryList()
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [categoryListVisible])

    return (
        <section data-testid="search" className={`flex-1 flex justify-center ${className}`}>
            <div className="flex items-center justify-center border rounded-md px-4 lg:w-2/3 w-full">
                <input placeholder="Enter search text" className="outline-none flex-1 text-sm" />
                <div ref={ categoryRef }>
                    <button onClick={ toggleCategoryList } 
                            className="text-sm bg-slate-200 h-9 px-3"
                            ref={ buttonRef }>
                        { selectedCategory }
                    </button>
                    {
                        categoryListVisible &&
                            <CategoryList categoryList={ categoryList } selectCategory={ selectCategory } />
                    }
                </div>
                <FiSearch role="search-button" className="ml-3" />
            </div>
        </section>
    )
}

export default Search
