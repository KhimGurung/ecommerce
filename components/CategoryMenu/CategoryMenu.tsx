import React, { useState } from 'react'
import CategoryList from '@components/CategoryList'
import { FiAlignLeft } from "react-icons/fi"

const categoryList = ["Category 1", "Category 2", "Category 3"]

interface categorymenu {
    className: string
}

const CategoryMenu = ({ className }: categorymenu) => {
    const [categoryListVisible, setCategoryListVisible] = useState(false)
    const selectCategory = (category: string) => {
        console.log(category)
    }
    const toggleCategoryList = () => {
        setCategoryListVisible(preVal => !preVal)
    }
    return (
        <div role="category-menu" onClick={ toggleCategoryList } className={className}>
            <div className="flex items-center gap-5 hover:cursor-pointer">
                <FiAlignLeft role="all-category-icon" className="text-3xl" />
                <p className="hidden md:block">All Categories</p>
            </div>
            {
                categoryListVisible &&
                    <CategoryList categoryList={ categoryList } selectCategory={ selectCategory } />
            }
        </div>
    )
}

export default CategoryMenu
