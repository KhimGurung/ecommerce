import Accordian from '@components/Accordian'
import React from 'react'
import FilterBrand from './FilterBrand'
import FilterChildren from './FilterChildren'
import FilterColor from './FilterColor'
import FilterGender from './FilterGender'
import FilterPrice from './FilterPrice'
import FilterProductType from './FilterProductType'
import FilterSale from './FilterSale'
import FilterSize from './FilterSize'

const BrowseFilter = () => {
    return (
        <section role="browse-filter">
            <hr className="mb-4" />
            <FilterGender />
            <hr className="mb-4" />
            <FilterChildren />
            <hr className="mb-4" />
            <FilterPrice />
            <hr className="mb-4" />
            <FilterSize />
            <hr className="mb-4" />
            <FilterProductType />
            <hr className="mb-4" />
            <FilterBrand />
            <hr className="mb-4" />
            <FilterColor />
            <hr className="mb-4" />
            <FilterSale />
        </section>
    )
}

export default BrowseFilter
