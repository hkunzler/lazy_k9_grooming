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
            <nav className="sticky top-0 z-50 w-full">
                <div className="p-4 lg:mt-10">
                    <div className="flex justify-end lg:justify-between items-center text-black font-black tracking-widest text-4xl">
                        {!isHomePage && (
                            <div className="absolute left-0 top-4 ml-4 lg:ml-16">
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
                            className="lg:hidden mt-4 focus:outline-none text-black flex text-3xl"
                        >
                            &#9776;
                        </button>

                        <div className="hidden lg:flex items-center justify-center w-full">
                            <div className="flex justify-center w-full pt-8 space-x-8">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="hover:text-secondary white-shadow"
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
                        <div className="flex flex-col items-center justify-center space-y-4 text-black text-xl min-h-screen">
                            <button
                                onClick={toggleMenu}
                                className="absolute top-0 right-0 mt-8 mr-4 text-3xl"
                            >
                                &times;
                            </button>
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={toggleMenu}
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
