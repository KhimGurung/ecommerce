import type { NextPage } from 'next'
import PageTemplate from '@components/PageTemplate'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <PageTemplate>
            <h1>Home</h1>
            <p>Test driving development with NextJs. Its still under develoment.</p>
            <p>Go manually to /browse to see brouse page</p>
            <Link href="/browse">
                <a>Go To Browse Page</a>
            </Link>
        </PageTemplate>
    )
}

export default Home
