import React from 'react'
import Accordian from "@components/Accordian"

const FilterGender = () => {
    return (
        <section role="filter-gender">
            <Accordian title="Gender">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <input id="men" type="checkbox" className="accent-black" />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input id="women" type="checkbox" className="accent-black" />
                        <label htmlFor="women">Women</label>
                    </div>
                </div>
            </Accordian>
        </section>
    )
}

export default FilterGender
