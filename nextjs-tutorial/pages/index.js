import Link from "next/link";

function HomePage() {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href="posts/first">zum ersten Post</Link>
        </>
    );
}

export default HomePage;
