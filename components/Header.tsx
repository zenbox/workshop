import React, { ReactNode} from "react";
import type { AppProps } from "next/app";

// * Ein eigenes Interface mit Typen für die Props
interface Props extends AppProps {
    title: string | number;
    content: string;
}

// * Durchreichen von Props
export default function Header(props: Props): ReactNode {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </header>
    );
}
