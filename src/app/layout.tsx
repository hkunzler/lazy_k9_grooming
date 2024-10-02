import Header from './components/Header';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>{' '}
                <footer className="bg-secondary text-white px-4 py-8">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-16">
                            <div>
                                <h3 className="text-lg font-bold">
                                    Quick Links
                                </h3>
                                <div className="flex flex-col mt-4 space-y-2">
                                    <Link
                                        className="hover:text-primary"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/about"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/product-info"
                                    >
                                        Product Info
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/prices"
                                    >
                                        Prices
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/faq"
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/gallery"
                                    >
                                        Gallery
                                    </Link>
                                    <Link
                                        className="hover:text-primary"
                                        href="/contact"
                                    >
                                        Contact
                                    </Link>{' '}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Follow Us</h3>
                                <div className="flex space-x-4 mt-4">
                                    <Link href="https://facebook.com/wyoluxurypets/">
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <Link href="#">
                                        <span className="sr-only">
                                            Instagram
                                        </span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </Link>{' '}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row-reverse">
                            <div className="min-w-48">
                                <h3 className="text-lg font-bold">Address</h3>
                                <p className="mt-4">
                                    106 N Bent St Suite B<br />
                                    Powell, WY 82435
                                </p>
                            </div>
                            <div
                                className="relative w-full overflow-hidden"
                                style={{ paddingBottom: '56.25%' }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11333.421882723911!2d-108.7581884!3d44.7531647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534953d6c1779d2d%3A0xfbdd611e3506b309!2sLazy%20K9%20Grooming!5e0!3m2!1sen!2sus!4v1726170750238!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    aria-hidden="false"
                                ></iframe>
                            </div>
                        </div>{' '}
                    </div>
                </footer>
            </body>
        </html>
    );
}
