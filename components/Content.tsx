// Import React and Nextjs stuff
import React, { ReactNode, useState, useEffect } from "react";
import type { AppProps } from "next/app";

interface Props {
    currentUrl: string;
}
interface State {
    content: string;
    currentUrl: string;
}

export default function Content(props: Props) {
    // pattern: state value, setState function
    // Initial set of states (mount or didMount)
    const [state, setState] = useState({
        content: "Initial content",
        currentUrl: props.currentUrl,
    });

    // - - -

    // Veränderungen werden umgesetzt (update or didUpdate)
    async function getContent() {
        // try {
        //     const response = await fetch(state.currentUrl);
        //     const data = response.json();
        // } catch (error) {
        //     console.error(error);
        // }
        await fetch(state.currentUrl)
            .then((response) => response.json())
            .then((data) => {
                // Festhalten der geänderten Informationen in `state`
                setState({ currentUrl: state.currentUrl, content: data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // first render (did mount)
    // useEffect(() => {
    //     getContent();
    // });

    // useEffect() - render after update (did update)
    useEffect(() => {
        getContent();
    }, [state.currentUrl]);

    // - - -
    // `state` - bei Änderungen wird AUTOMATISCH neu gerendert!
    return (
        <div className="content">
            <>{state.content}</>
        </div>
    );
}
