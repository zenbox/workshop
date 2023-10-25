import Link from "next/link";
import Head from "next/head";
import Container from "../../components/container";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>Mein erster Beitrag</title>
                <meta
                    name="description"
                    content="Mein erster Beitrag"
                />
            </Head>
            <Container>
                <h2>Überschrift aus first.js</h2>

                {/* - - - - - - - */}
                <img
                    width="50%"
                    src="/assets/figures/image.jpg"
                    alt="Bild"
                />
                <h3>Mein erster Beitrag</h3>
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
