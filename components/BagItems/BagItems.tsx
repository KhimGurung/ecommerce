import React from 'react'
import { FiShoppingBag } from "react-icons/fi"

const BagItems = () => {
    return (
        <section    data-testid="bag-items"
                    className="flex items-center gap-2 ml-4">
            <FiShoppingBag role="my-bag-icon" />
            <p className="hidden md:block">My Bag</p>
        </section>
    )
}

export default BagItems
