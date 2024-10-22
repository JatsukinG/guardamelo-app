const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content()
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '.5rem',
                sm: '2rem',
                lg: '5rem',
                xl: '8rem',
                '2xl': '12rem',
            },
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [
        flowbite.plugin()
    ],
}