import Accordian from '@components/Accordian'
import React from 'react'

const FilterSale = () => {
    return (
        <section role="filter-sale">
            <Accordian title="Sale">
                <div className="flex gap-3 items-center">
                    <input id="sale" type="checkbox" className="accent-black" />
                    <label htmlFor="sale">Sale</label>
                </div>
            </Accordian>
        </section>
    )
}

export default FilterSale
