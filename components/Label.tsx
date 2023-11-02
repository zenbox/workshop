interface LabelProps {
    text: string;
    style: object;
    htmlFor: string;
}

export default function Label({ text, style, htmlFor }: LabelProps) {
    return (
        <>
            <label
                style={style}
                htmlFor={htmlFor}>
                {text}
            </label>
        </>
    );
}
