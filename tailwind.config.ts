import type {Config} from "tailwindcss";

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                customBlack: '#0f0f0f',
            },
        },
    },
    plugins: [],
} satisfies Config;