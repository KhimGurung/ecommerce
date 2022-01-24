import Accordian from '@components/Accordian'
import React from 'react'

const FilterPrice = () => {
    return (
        <section role="filter-price">
            <Accordian title="Price">
                <div className="grid grid-cols-2 gap-3">
                    <input id="min" type="text" className="bg-gray-100 px-2 py-3 outline-none" placeholder="min" />
                    <input id="max" type="text" className="bg-gray-100 px-2 py-3 outline-none" placeholder="max" />
                </div>
            </Accordian>
        </section>
    )
}

export default FilterPrice
