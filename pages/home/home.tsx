import type { NextPage } from 'next'
import Header from '@components/Header'

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <section>
                <h1>Home</h1>
                <p>Test driving development with NextJs. Its still under develoment.</p>
                <p>Go manually to /browse to see brouse page</p>
            </section>
        </>
    )
}

export default Home
