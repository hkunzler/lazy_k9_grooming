'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.png';
import { usePathname } from 'next/navigation';
import { navLinks } from '../constants';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <header>
            <nav className="top-0 z-50 sticky w-full">
                <div className="lg:mt-10 p-4">
                    <div className="flex justify-end lg:justify-between items-center font-black text-4xl text-black tracking-widest">
                        {!isHomePage && (
                            <div className="top-4 left-0 absolute ml-4 lg:ml-16">
                                <Link href="/">
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
                            className="lg:hidden mt-4 focus:outline-none flex text-3xl text-black"
                        >
                            &#9776;
                        </button>

                        <div className="lg:flex justify-center items-center hidden w-full">
                            <div className="flex justify-center space-x-8 pt-8 w-full">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={` hover:text-secondary white-shadow ${
                                            pathname === href &&
                                            'text-primary border-b-2 border-primary'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${isOpen ? 'fixed inset-0 bg-white' : 'hidden'} lg:hidden z-20`}
                    >
                        <div className="flex flex-col justify-center items-center space-y-4 min-h-screen text-3xl text-black tracking-wide">
                            <button
                                onClick={toggleMenu}
                                className="top-0 right-0 absolute mt-8 mr-4 text-3xl"
                            >
                                &times;
                            </button>
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={toggleMenu}
                                    className={`${
                                        pathname === href &&
                                        'text-primary border-b-2 border-primary'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
