import HeaderSearchBar from "@components/HeaderSearchBar"
import HeaderTopBar from "@components/HeaderTopBar"
import NavBar from "@components/NavBar"
import React from "react"

const Header = () => {
    return (
        <header className="z-40">
            <HeaderTopBar />
            <HeaderSearchBar />
            <NavBar />
        </header>
    )
}

export default Header
