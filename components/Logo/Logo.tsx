import React from 'react'
import Link from 'next/link'

function Logo() {
    return (
        <section data-testid="logo">
            <Link href="/">
                <h1 className="text-3xl font-bold">STORE</h1>
            </Link>
        </section>
    )
}

export default Logo
