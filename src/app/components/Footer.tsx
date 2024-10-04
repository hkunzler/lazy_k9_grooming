import Link from 'next/link';
import { FacebookIcon } from '../assets/FacebookIcon';
import { InstagramIcon } from '../assets/InstagramIcon';
import { GoogleMapEmbed } from '../assets/GoogleMapEmbed';
import { navLinks } from '../constants';

export const Footer = () => {
    const socialLinks = [
        {
            href: 'https://facebook.com/wyoluxurypets/',
            label: 'Facebook',
            icon: <FacebookIcon />,
        },
        {
            href: '#',
            label: 'Instagram',
            icon: <InstagramIcon />,
        },
    ];

    return (
        <footer className="bg-secondary text-white px-4 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-16">
                    <nav>
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <div className="flex flex-col mt-4 space-y-2">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    className="hover:text-primary"
                                    href={href}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div>
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            {socialLinks.map(({ href, label, icon }) => (
                                <Link key={href} href={href} aria-label={label}>
                                    {icon}
                                </Link>
                            ))}
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
