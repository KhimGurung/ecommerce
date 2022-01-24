import React from 'react'

interface IList{
    role: string,
    list: string[],
    selectListItem: Function
}

const List = ({ role, list, selectListItem }: IList) => {
    return (
        <ul role={ role } className="text-sm absolute bg-slate-200 pt-4 px-4 py-2 min-w-full">
            {
                (list && list.length > 0) &&
                    list.map((listItem, index) => 
                        <li key={ index } 
                            onClick={() => selectListItem(index)} 
                            className="mb-2 cursor-pointer">
                                {listItem}
                        </li>
                    )
            }
        </ul>
    )
}

export default List
