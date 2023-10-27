import React, { ReactNode } from "react";
import type { AppProps } from "next/app";

import Anchor from "../components/Anchor";
import Link from "next/link";

export default function Navigation(): ReactNode {
    return (
        <nav>
            <ul>
                <li>
                    <Anchor href="/">Home</Anchor>
                </li>
                <li>
                    <Anchor href="content">Content</Anchor>
                </li>
                <li>
                    <Anchor href="form">Form</Anchor>
                </li>
                <li>
                    <Anchor href="table">Table</Anchor>
                </li>
                <li>
                    <Anchor href="logout">Logout</Anchor>
                </li>
            </ul>
        </nav>
    );
}
