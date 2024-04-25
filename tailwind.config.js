/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,ts}"],
    prefix: "tw-",
    important: true,
    corePlugins: { preflight: false },

    // ...
    theme: {
        extend: {},
    },
    plugins: [],
};
