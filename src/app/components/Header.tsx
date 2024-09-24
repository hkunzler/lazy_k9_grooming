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
            <nav className="sticky top-0 z-10">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex justify-between font-bold items-center text-white text-3xl">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/product-info">Product Info</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/gallery">Gallery</Link>
                            <Link href="/contact">Contact</Link>

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
