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
            animation: {
                'floating': 'floating 3s ease-in-out infinite',
            },
            keyframes: {
                'floating': {
                    '0%': {transform: 'translateY(0)'},
                    '50%': {transform: 'translateY(-10px)'},
                    '100%': {transform: 'translateY(0)'},
                },
            }
        },
    },
    plugins: [
        flowbite.plugin()
    ],
}