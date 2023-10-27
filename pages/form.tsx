import React, { useState, useEffect } from "react";
import { FALSE } from "sass";

const STATUS = {
    NAME_IS_REQUIRED: "the name is required",

    PASSWORD_IS_REQUIRED: "the password is required",
    PASSWORD_HAS_MINIMUM: "the password has a minimum of 8 characters",

    EMAIL_IS_REQUIRED: "the email is required",
    EMAIL_IS_INVALID: "the email is invalid",
};

interface IErrors {
    name?: string;
    email?: string;
    password?: string;
}

export default function Form() {
    // Anmelden der Zustände mit `useState`
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<IErrors>({});
    const [isFormValid, setIsFormValid] = useState(false);

    // Validate!
    useEffect(() => {
        validateForm();
    }, [name, email, password]);

    // Validate inputs
    const validateForm = () => {
        let errors = {
            name: "",
            email: "",
            password: "",
        };

        if (!name) {
            errors.name = STATUS.NAME_IS_REQUIRED;
        }

        if (!email) {
            errors.email = STATUS.EMAIL_IS_REQUIRED;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = STATUS.EMAIL_IS_INVALID;
        }

        if (!password) {
            errors.password = STATUS.PASSWORD_IS_REQUIRED;
        } else if (password.length < 6) {
            errors.password = STATUS.PASSWORD_HAS_MINIMUM;
        }

        setErrors(errors);
        console.log("length: ", Object.keys(errors).length);

        // Check if errors object is empty
        if (
            Object.keys(errors).length === 0 ||
            errors.name ||
            errors.email ||
            errors.password
        ) {
            setIsFormValid(false);
        } else setIsFormValid(true);
    };

    // Submit
    const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormValid) {
            console.log("Form submitted");
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <form
            style={styles.formContainer}
            onSubmit={onHandleSubmit}>
            <fieldset
                style={{
                    ...styles.fieldSet,
                    ...styles.roundCorner,
                    ...styles.boxShadow,
                }}>
                <legend>Your Login</legend>

                <label
                    style={styles.blockElement}
                    htmlFor="username">
                    Username
                </label>
                <input
                    style={styles.blockElement}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Your username here"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <p style={styles.errorText}>{errors.name}</p>}

                <label
                    style={styles.blockElement}
                    htmlFor="email">
                    Email
                </label>
                <input
                    style={styles.blockElement}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email here"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={styles.errorText}>{errors.email}</p>}

                <label
                    style={styles.blockElement}
                    htmlFor="password">
                    Password
                </label>
                <input
                    style={styles.blockElement}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password here"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                    <p style={styles.errorText}>{errors.password}</p>
                )}

                <button
                    style={{
                        ...styles.blockElement,
                        opacity: isFormValid ? 1 : 0.5,
                    }}
                    disabled={!isFormValid}>
                    Login
                </button>
            </fieldset>
        </form>
    );
}

const styles = {
    formContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "50vw",
        marginBlock: "auto",
        marginInline: "auto",
    },
    fieldSet: { paddingBlock: "1rem" },
    errorText: {
        color: "red",
        fontSize: "0.8rem",
        marginBlock: "0 1.5rem",
    },
    blockElement: {
        display: "block",
    },
    roundCorner: {
        borderRadius: "0.5rem",
        border: "0",
    },
    boxShadow: {
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
    },
};
