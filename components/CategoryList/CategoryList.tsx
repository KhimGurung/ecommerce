import React from 'react'

interface category{
    categoryList: string[],
    selectCategory: Function
}

const CategoryList = ({ categoryList, selectCategory }: category) => {
    return (
        <ul role="category-list" className="text-sm absolute bg-slate-200 p-2 px-4">
            {
                (categoryList && categoryList.length > 0) &&
                    categoryList.map((category, index) => 
                        <li key={ index } onClick={() => selectCategory(category)} className="mb-2 cursor-pointer">{category}</li>
                    )
            }
        </ul>
    )
}

export default CategoryList
