import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#7D53DE', // Add your brand's primary color
                secondary: '#33157A', // Add a secondary color
                accent: '#E2E2E2', // Add an accent color
                neutral: '#333', // Neutral color for text and background
                background: '#E2E2E2', // Custom background color
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Custom font, fallback to sans-serif
                heading: ['Poppins', 'sans-serif'], // Font for headings
            },
            spacing: {
                '72': '18rem', // Add a custom large spacing size
                '84': '21rem',
                '96': '24rem',
            },
            borderRadius: {
                lg: '1.5rem', // Custom border radius
            },
            fontFamily: {
                // Setting K2D as the default font
                sans: ['K2D', 'sans-serif'],

                // Custom font families for specific tags
                ptSans: ['PT Sans', 'sans-serif'],
                wendy: ['Wendy One', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
