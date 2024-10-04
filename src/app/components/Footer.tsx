import Link from 'next/link';

import { FacebookIcon } from '../assets/FacebookIcon';
import { InstagramIcon } from '../assets/InstagramIcon';
import { GoogleMapEmbed } from '../assets/GoogleMapEmbed';

export const Footer = () => {
    return (
        <footer className="bg-secondary text-white px-4 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-16">
                    <div>
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <div className="flex flex-col mt-4 space-y-2">
                            <Link className="hover:text-primary" href="/">
                                Home
                            </Link>
                            <Link className="hover:text-primary" href="/about">
                                About
                            </Link>
                            <Link
                                className="hover:text-primary"
                                href="/product-info"
                            >
                                Product Info
                            </Link>
                            <Link className="hover:text-primary" href="/prices">
                                Prices
                            </Link>
                            <Link className="hover:text-primary" href="/faq">
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
                                <span className="sr-only">Facebook</span>
                                <FacebookIcon />
                            </Link>
                            <Link href="#">
                                <span className="sr-only">Instagram</span>
                                <InstagramIcon />
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
                    <GoogleMapEmbed />
                </div>
            </div>
        </footer>
    );
};
