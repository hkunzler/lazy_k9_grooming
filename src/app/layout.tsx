import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Preload Fonts */}
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=K2D:wght@400;700&display=swap"
                    as="style"
                    onLoad={(e) => (e.currentTarget.rel = 'stylesheet')}
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
                    as="style"
                    onLoad={(e) => (e.currentTarget.rel = 'stylesheet')}
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Wendy+One&display=swap"
                    as="style"
                    onLoad={(e) => (e.currentTarget.rel = 'stylesheet')}
                />

                {/* Fallback for browsers with no JS */}
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=K2D:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Wendy+One&display=swap"
                    />
                </noscript>
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
