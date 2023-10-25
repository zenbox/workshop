import Link from "next/link";
import Router from "next/router";

function HomePage(props) {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href="posts/first">zum ersten Post</Link>

            <div onClick={() => Router.push("posts/first")}>Imparative Link</div>

            <div>Anzahl der Sterne: {props.stars}</div>
        </>
    );
}

export default HomePage;
// Daten beim `request` aktualisiert laden
// export async function getServerSideProps(context) {

// Daten beim `build` hinterlegen
export async function getStaticProps(context) {
    const response = await fetch("http://localhost:3000/api/stars.json");
    const json = await response.json();
    return {
        props: {
            stars: json.stargazers_count,
        },
    };
}
