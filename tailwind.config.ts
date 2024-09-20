import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7D53DE',
                secondary: '#33157A',
                background: '#E2E2E2',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                sans: ['K2D', 'sans-serif'],
                ptSans: ['PT Sans', 'sans-serif'],
                wendy: ['Wendy One', 'sans-serif'],
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            borderRadius: {
                lg: '1.5rem',
            },
        },
    },
    plugins: [],
};
export default config;
