import Accordian from '@components/Accordian'
import React from 'react'

const productTypes = [
    {
        key: "joggerpants",
        value: "Jogger Pants"
    },
    {
        key: "cottonpants",
        value: "Cotton Pants"
    },
    {
        key: "sweatpants",
        value: "Sweatpants"
    },
    {
        key: "sportpants",
        value: "Sport Pants"
    },
    {
        key: "trainingpants",
        value: "Training Pants"
    },
    {
        key: "tshirts",
        value: "T-Shirts"
    },
    {
        key: "runningshoes",
        value: "Running Shoes"
    }
]

const FilterProductType = () => {
    return (
        <section role="filter-product-type">
            <Accordian title="Product Type">
                <div className="flex flex-col gap-3">
                    {
                        productTypes.map(productType => (
                            <div key={ productType.key } className="flex gap-3 items-center">
                                <input id={ productType.key } type="checkbox" className="accent-black" />
                                <label htmlFor={ productType.key }>{ productType.value }</label>
                            </div>
                        ))
                    }
                </div>
            </Accordian>
        </section>
    )
}

export default FilterProductType
