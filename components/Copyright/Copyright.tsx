import Menu from '@components/Menu'
import React from 'react'

const menuList = [
    {
        title: "Imprint",
        link: "/"
    },
    {
        title: "Terms & Condition",
        link: "/"
    },
    {
        title: "Privacy Policy",
        link: "/"
    },
    {
        title: "Cookies",
        link: "/"
    }
]

const Copyright = () => {
    return (
        <section role="copyright" className="bg-slate-300 py-5 text-sm">
            <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center">
                <p>Copyright © 2022 Store Inc. All rights reserved</p>
                <Menu menuList={ menuList } />
            </div>
        </section>
    )
}

export default Copyright
