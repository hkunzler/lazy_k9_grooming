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
                black: '#333',
            },

            fontFamily: {
                sans: ['var(--font-k2d)', 'sans-serif'],
                ptSans: ['var(--font-pt-sans)', 'sans-serif'],
                wendy: ['var(--font-wendy-one)', 'sans-serif'],
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
