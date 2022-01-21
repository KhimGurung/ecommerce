import BagItems from '@components/BagItems'
import CategoryMenu from '@components/CategoryMenu'
import Logo from '@components/Logo'
import Search from '@components/Search'
import WishList from '@components/WishList'
import React from 'react'

function HeaderSearchBar() {
    return (
        <section data-testid="header-search-bar">
            <div className="container lg:flex items-center grid lg:grid-cols-3 md:grid-cols-[1fr_auto_auto_auto] grid-cols-[auto_1fr_auto_auto] gap-3 lg:py-10 py-5">
                <CategoryMenu className="md:hidden" />
                <Logo />
                <Search className="lg:order-none col-span-full order-last" />
                <WishList />
                <BagItems />
            </div>
        </section>
    )
}

export default HeaderSearchBar
