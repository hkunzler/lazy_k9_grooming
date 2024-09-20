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
            <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-secondary">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center text-white text-2xl">
                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/product-info">Product Info</Link>
                        </div>

                        <Link href="/" className="flex justify-center">
                            <img
                                src="/logo.png"
                                alt="Lazy K9 Logo"
                                className="h-16"
                            />
                        </Link>

                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/services">Services</Link>
                            <Link href="/gallery">Gallery</Link>
                            <Link href="/contact">Contact</Link>
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
