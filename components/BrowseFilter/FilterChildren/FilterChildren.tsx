import Accordian from '@components/Accordian'
import React from 'react'

const FilterChildren = () => {
    return (
        <section role="filter-children">
            <Accordian title="Children">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <input id="boy" type="checkbox" className="accent-black" />
                        <label htmlFor="boy">Boy</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input id="gril" type="checkbox" className="accent-black" />
                        <label htmlFor="gril">Girl</label>
                    </div>
                </div>
            </Accordian>
        </section>
    )
}

export default FilterChildren
