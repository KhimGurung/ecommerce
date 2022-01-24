import Accordian from '@components/Accordian'
import React from 'react'

const colors = ["bg-red-500", "bg-black", "bg-green-500", "bg-blue-600", "bg-yellow-600","bg-gray-600", "bg-gray-300", "bg-blue-200", "bg-slate-500"]

const FilterColor = () => {
    return (
        <section role="filter-color">
            <Accordian title="Color">
                <div className="flex gap-3 items-center flex-wrap">
                    {
                        colors.map(color => <div key={ color } className={`w-10 h-5 ${color}`} />)
                    }
                </div>
            </Accordian>
        </section>
    )
}

export default FilterColor
