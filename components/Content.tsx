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
    async function getContent() { }
    useEffect(() => { })
    
// - - -

    return (
        <div className="content">
            <>{state.content}</>
        </div>
    );
}
