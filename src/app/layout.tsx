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
            <body className="flex flex-col min-h-screen font-sans">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
