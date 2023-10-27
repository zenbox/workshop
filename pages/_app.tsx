// Import React and Nextjs stuff
import React, { ReactNode } from "react";
import type { AppProps } from "next/app";

// Import of the components
import Head from "next/head";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Footer from "../components/Footer";

// Global styles
import "../src/sass/MyApp.scss";

// Interface
interface Props extends AppProps {
    children: ReactNode;
}

export default function MyApp({ Component, pageProps }: Props) {
    // * ggf. dynamischen Erzeugen von Properties
    const headerTitle: string = "header content";

    return (
        <div className="template-container">
            <Head>
                <title>My App</title>
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            {/* Properties are passed to the components */}
            <Header
                title={headerTitle}
                content="lorem ipsum"
            />
            <Navigation />
            <Main>
                {/* Hier werden die eigentlichen Komponente eingesetzt! */}
                <Component {...pageProps} />{" "}
            </Main>
            <Footer />
        </div>
    );
}
