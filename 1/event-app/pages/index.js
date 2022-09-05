import Link from 'next/link'

function HomePage() {
    return (
        <>
            <h1>Hey there!</h1>
            <p>Welcome to my event page</p>
            <ul>
                <li>
                    <Link href='/portfolio'>Portfolio Page</Link>
                </li>
            </ul>
        </>
    )
}

export default HomePage;
