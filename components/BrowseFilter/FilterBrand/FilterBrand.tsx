import Accordian from '@components/Accordian'
import React from 'react'

const brands = [
    {
        key: "nike",
        value: "Nike"
    },
    {
        key: "adidas",
        value: "Adidas"
    },
    {
        key: "puma",
        value: "Puma"
    },
    {
        key: "jacknjohns",
        value: "Jack & Johns"
    },
    {
        key: "hnm",
        value: "H & M"
    },
    {
        key: "vans",
        value: "Vans"
    },
    {
        key: "bugatti",
        value: "Bugatti"
    }
]

const FilterBrand = () => {
    return (
        <section role="filter-brand">
            <Accordian title="Brands">
                <div className="flex flex-col gap-3">
                    {
                        brands.map(brand => (
                            <div key={ brand.key } className="flex gap-3 items-center">
                                <input id={ brand.key } type="checkbox" className="accent-black" />
                                <label htmlFor={ brand.key }>{ brand.value }</label>
                            </div>
                        ))
                    }
                </div>
            </Accordian>
        </section>
    )
}

export default FilterBrand
