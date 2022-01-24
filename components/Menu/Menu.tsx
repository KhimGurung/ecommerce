import React from 'react'
import style from "./Menu.module.scss"

interface menu {
    menuList: string[]
}

const Menu = ({ menuList }: menu) => {
    return (
        <ul className={ `${style.menu} flex lg:gap-10 gap-5 items-center overflow-x-auto `}>
            {
                (menuList && menuList.length > 0) &&
                    menuList.map((menu, index) => <li key={ index } className="hover:cursor-pointer hover:text-slate-300 transition-colors duration-300">{ menu }</li>)
            }
        </ul>
    )
}

export default Menu
