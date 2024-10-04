'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.png';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const isHomePage = pathname === '/';
    return (
        <header>
            <nav className="sticky top-0 z-50 w-full">
                <div className="p-4 lg:mt-10">
                    <div className="flex justify-end lg:justify-between items-center text-black font-black tracking-widest text-4xl">
                        {!isHomePage && (
                            <div className="absolute left-0 top-4 ml-4 lg:ml-16">
                                <Link href="/">
                                    {' '}
                                    <Image
                                        src={logo}
                                        alt="Lazy K9 Grooming"
                                        className="max-w-24 lg:max-w-32"
                                    />
                                </Link>
                            </div>
                        )}

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden mt-4 focus:outline-none text-black flex text-3xl"
                        >
                            &#9776;
                        </button>
                        <div className="hidden lg:flex items-center justify-center w-full">
                            <div className="flex justify-center w-full pt-8 space-x-8">
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/about"
                                >
                                    About
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/product-info"
                                >
                                    Product Info
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/prices"
                                >
                                    Prices
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/faq"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/gallery"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    style={{
                                        textShadow:
                                            '0px 2px 4px rgba(255, 255, 255, 0.7)',
                                    }}
                                    className="hover:text-secondary"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${isOpen ? 'fixed inset-0 bg-white' : 'hidden'} lg:hidden`}
                        style={{ zIndex: 1000 }}
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 text-black text-xl min-h-screen">
                            <button
                                onClick={toggleMenu}
                                className="absolute top-0 right-0 mt-8 mr-4 text-3xl"
                            >
                                &times;{' '}
                            </button>
                            <Link href="/" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link href="/about" onClick={toggleMenu}>
                                About
                            </Link>
                            <Link href="/product-info" onClick={toggleMenu}>
                                Product Info
                            </Link>
                            <Link href="/prices" onClick={toggleMenu}>
                                Prices
                            </Link>
                            <Link href="/faq" onClick={toggleMenu}>
                                FAQ
                            </Link>
                            <Link href="/gallery" onClick={toggleMenu}>
                                Gallery
                            </Link>
                            <Link href="/contact" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
