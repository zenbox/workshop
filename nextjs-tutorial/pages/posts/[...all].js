import Link from "next/link";
import Head from "next/head";
import Container from "../../components/container";

export default function AllPosts(props) {
    return (
        <>
            <Head>
                <title>Mein universeller Beitrag</title>
                <meta
                    name="description"
                    content="Mein universeller Beitrag"
                />
            </Head>
            <Container>
                <h2>Überschrift aus all posts</h2>

                {/* - - - - - - - */}
                <img
                    width="50%"
                    src="/assets/figures/image.jpg"
                    alt="Bild"
                />
                <h3>Mein unverseller Beitrag</h3>
                <p>{props.stars}</p>
                <ul>
                    <li>
                        <Link href="../">zur Startseite</Link>
                    </li>
                </ul>
                {/* - - - - - - - */}
            </Container>
        </>
    );
}

export async function getServerSideProps(request) {
    let target = request.params.all;

    if (target === "lalala") {
        return {
            props: {
                stars: 33333,
            },
        };
    } else {
        const response = await fetch("http://localhost:3000/api/stars.json");
        const json = await response.json();
        return {
            props: {
                stars: json.stargazers_count,
            },
        };
    }
}
