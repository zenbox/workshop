// Import React and Nextjs stuff
import React, { ReactNode } from "react";
import type { AppProps } from "next/app";

interface Props extends AppProps {
    children: ReactNode;
}

// Baut `children` die, die von `_app.tsx`
// bzw.über die Navigation übergeben wurden
export default function Main(props: Props): ReactNode {
    return (
        <>
            {/* Einschleusen der Content-Komponente als child */}
            <main>{props.children}</main>
        </>
    );
}
