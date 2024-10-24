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
        <footer className="bg-secondary px-4 py-8 text-white">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto container">
                <div className="flex gap-16">
                    <nav>
                        <h3 className="font-bold text-lg">Quick Links</h3>
                        <div className="flex flex-col space-y-2 mt-4">
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
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            {socialLinks.map(({ href, label, icon }) => (
                                <Link key={href} href={href} aria-label={label}>
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row-reverse flex-col gap-4">
                    <div className="min-w-48">
                        <h3 className="font-bold text-lg">Address</h3>
                        <p className="mt-4 text-white">
                            106 N Bent St Suite B<br />
                            Powell, WY 82435
                        </p>
                        <p className="text-white">
                            <strong>Important:</strong> The entrance to Lazy K9
                            Grooming is{' '}
                            <strong>
                                accessible from the back of the building,
                                through the alley
                            </strong>
                            .
                        </p>
                    </div>
                    <GoogleMapEmbed />
                </div>
            </div>
        </footer>
    );
};
