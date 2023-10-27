import React, { ReactNode, useState, useEffect } from "react";
// import type { AppProps } from "next/app";

interface Props {
    href: string;
    children: ReactNode;
}

const STATUS = {
    HOVERED: "hovered",
    NORMAL: "normal",
};

export default function Anchor(props: Props): ReactNode {
    // Initiales Setzen von `state`und Rückgabe von `setState`
    const [state, setState] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        console.log("Mouse entered");
        setState(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        console.log("Mouse left");
        setState(STATUS.NORMAL);
    };

    return (
        <>
            <a
                className={state}
                href={props.href}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                {props.children}
            </a>
        </>
    );
}
