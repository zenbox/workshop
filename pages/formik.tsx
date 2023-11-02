import { useFormik } from "formik";
import loginSchema from "../src/validations/loginSchema";

import Input from "../components/Input";
import Label from "../components/Label";

export default function Formik() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        // Validate!
        validationSchema: loginSchema,

        // Send on submit
        onSubmit: (values) => {},
    });

    return (
        <>
            <form id="loginForm">
                <Label text="Email" />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                />
                <p>{formik.errors.email}</p>
                <Label text="Password" />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                />
                <p>{formik.errors.password}</p>
            </form>
            <button
                form="loginForm"
                type="submit">
                Login
            </button>
        </>
    );
}
