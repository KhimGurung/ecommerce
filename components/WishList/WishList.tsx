import React from 'react'
import { FiHeart } from "react-icons/fi"

function WishList() {
    return (
        <section    data-testid="wish-list" 
                    className="flex items-center gap-2">
            <FiHeart role="wish-list-icon" />
            <p className="hidden md:block">My Wishes</p>
        </section>
    )
}

export default WishList
