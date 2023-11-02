// Import React and Nextjs stuff
import React, { ReactNode } from "react";
import Image from "next/image";

export default function Content() {
    return (
        <article>
            <Image
                src="https://picsum.photos/id/505/480/200"
                width="480"
                height="200"
                alt=""
            />
            <Image
                src="http://localhost:3000/assets/figures/image.jpg"
                width="480"
                height="200"
                alt=""
            />
            <Image
                src="http://placekitten.com/480/200"
                width="480"
                height="200"
                alt=""
            />
            <h1>Content Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                sunt quaerat laboriosam.
            </p>
        </article>
    );
}
