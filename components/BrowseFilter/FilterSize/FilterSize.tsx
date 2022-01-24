import Accordian from '@components/Accordian'
import React from 'react'

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"]

const FilterSize = () => {
    return (
        <section role="filter-size">
            <Accordian title="Size">
                <div className="flex gap-5 items-center flex-wrap">
                    {
                        sizes.map(size => (
                            <div key={ size } className="min-w-[55px] py-1 px-2 border flex items-center justify-center">
                                <p className="font-light text-sm">{ size }</p>
                            </div>
                        ))
                    }
                </div>
            </Accordian>
        </section>
    )
}

export default FilterSize
