'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="sticky top-0 z-10 ">
                <div className="max-w-5xl mx-auto p-4 mt-8">
                    <div className="flex justify-center items-center text-black font-black tracking-widest text-4xl">
                        <div className="hidden lg:flex space-x-8 items-center">
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

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden focus:outline-none text-white text-3xl"
                        >
                            &#9776;
                        </button>
                    </div>

                    <div
                        className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}
                    >
                        <div className="flex flex-col space-y-4 text-white text-xl">
                            <Link href="/" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link href="/about" onClick={toggleMenu}>
                                About
                            </Link>
                            <Link href="/product-info" onClick={toggleMenu}>
                                Product Info
                            </Link>
                            <Link href="/services" onClick={toggleMenu}>
                                Services
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
