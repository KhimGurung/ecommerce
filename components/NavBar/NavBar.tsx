import React from 'react'
import Menu from "@components/Menu"
import CategoryMenu from '@components/CategoryMenu'

const menuList = ["About", "Delivery", "Return", "Payments", "Contact"]

const NavBar = () => {
    return (
        <nav role="nav-bar" className="border-b py-2">
            <section className="container flex items-stretch gap-7">
                <CategoryMenu className="md:block hidden" />
                <span className="bg-slate-300 w-px md:block hidden" />
                <Menu menuList={ menuList } />
            </section>
        </nav>
    )
}

export default NavBar
