import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'

interface IPageTemplate {
    className?:string,
    children: React.ReactNode
}

const PageTemplate = ({ className, children }: IPageTemplate) => {
    return (
        <section role="page-template" className="flex flex-col h-screen">
            <Header />
            <section className="container flex-1">
                { children }
            </section>
            <Footer />
        </section>
    )
}

export default PageTemplate
