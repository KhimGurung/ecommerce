import Link from 'next/link'
import React from 'react'
import style from "./Menu.module.scss"

type menuItem = {
    title: string,
    link: string
}

interface menu {
    menuList: menuItem[]
}

const Menu = ({ menuList }: menu) => {
    return (
        <ul className={ `${style.menu} flex lg:gap-10 gap-5 items-center overflow-x-auto `}>
            {
                (menuList && menuList.length > 0) &&
                    menuList.map((menu, index) => (
                        <li key={ index } className="hover:cursor-pointer hover:text-slate-300 transition-colors duration-300">
                            <Link href={ menu.link }>
                                <a>{ menu.title }</a>
                            </Link>
                        </li>))
            }
        </ul>
    )
}

export default Menu
