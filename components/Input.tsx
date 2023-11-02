interface InputProps {
    id: string;
    type: string;
    style?: object;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export default function Input({ id, type, style, onChange, name }: InputProps) {
    return (
        <>
            <input
                type={type}
                name={name}
                id={id}
                style={style}
                onChange={onChange}
            />
        </>
    );
}
