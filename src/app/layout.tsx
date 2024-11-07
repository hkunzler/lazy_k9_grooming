import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './globals.css';

import { K2D, PT_Sans, Wendy_One } from 'next/font/google';

const k2d = K2D({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-k2d',
});

const ptSans = PT_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-pt-sans',
});

const wendyOne = Wendy_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-wendy-one',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${k2d.variable} ${ptSans.variable} ${wendyOne.variable}`}
        >
            <head>
                <title>Lazy K9 Grooming</title>
                <meta
                    name="description"
                    content="Professional grooming services for your beloved pets at Lazy K9 Grooming."
                />

                {/* Open Graph meta tags */}
                <meta property="og:title" content="Lazy K9 Grooming" />
                <meta
                    property="og:description"
                    content="Professional grooming services for your beloved pets at Lazy K9 Grooming."
                />
                <meta
                    property="og:image"
                    content="https://lazyk9grooming.com/logo.png"
                />
                <meta property="og:url" content="https://lazyk9grooming.com" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Lazy K9 Grooming" />
                <meta
                    name="twitter:description"
                    content="Professional grooming services for your beloved pets at Lazy K9 Grooming."
                />
                <meta
                    name="twitter:image"
                    content="https://lazyk9grooming.com/logo.png"
                />
            </head>
            <body className="flex flex-col min-h-screen font-sans">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
