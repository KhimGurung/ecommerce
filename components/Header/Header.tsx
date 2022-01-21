import HeaderSearchBar from "@components/HeaderSearchBar"
import HeaderTopBar from "@components/HeaderTopBar"
import NavBar from "@components/NavBar"
import React from "react"

function Header() {
    return (
        <header data-testid="header">
            <HeaderTopBar />
            <HeaderSearchBar />
            <NavBar />
        </header>
    )
}

export default Header
