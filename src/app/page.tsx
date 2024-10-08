'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from './components/Hero';
import Team from './components/Team';
import Image from 'next/image';
import { Spinner } from './components/Spinner';
import { InfoCard } from './components/InfoCard';
import { StarIcon } from './assets/StarIcon';
import { HeartIcon } from './assets/HeartIcon';
import background from '/public/hero_background.png';
import logo from '/public/logo.png';
import dog1 from '/public/dog9.jpg';

interface GalleryImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

const GalleryPreview = dynamic(() => import('./components/GalleryPreview'), {
    loading: () => <Spinner />,
    ssr: false,
});

const cards = [
    {
        icon: <StarIcon />,
        title: 'Our Services',
        description:
            'We offer a range of grooming products specially designed for your pets. From shampoos to grooming tools, we ensure the best for your furry friends.',
        buttonText: 'Services',
        buttonHref: './prices',
        arrow: true,
    },
    {
        icon: <HeartIcon />,
        title: 'Product Info',
        description:
            'We offer a range of grooming products specially designed for your pets. From shampoos to grooming tools, we ensure the best for your furry friends.',
        buttonText: 'Products',
        buttonHref: '/product-info',
        arrow: true,
    },
];

const Home = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImageProps>({
        src: dog1.src,
        alt: 'Groomed dog 1',
    });

    const handleSelectImage = (img: GalleryImageProps) => setSelectedImage(img);

    return (
        <section className="flex flex-col mx-auto">
            <Hero background={{ ...background }} logo={{ ...logo }} />
            <div className="py-16">
                <div className="flex lg:flex-row flex-col justify-around items-center lg:space-x-16 mx-auto container">
                    <div className="p-8 lg:w-1/2">
                        <h2>Luxury Dog Grooming</h2>
                        <h1>Welcome to Lazy K9 Grooming</h1>
                        <p>
                            At Lazy K9 Grooming, we provide luxury, boutique
                            style grooming services for your beloved dogs. Our
                            experienced groomers use the latest techniques and
                            high-quality products to ensure your dog looks and
                            feels their best.
                        </p>

                        <div className="gap-16 grid grid-cols-1 md:grid-cols-2 mt-12">
                            {cards.map((card, index) => (
                                <InfoCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                    <Image
                        src={selectedImage.src}
                        width={400}
                        height={300}
                        className="shadow-lg px-4 rounded-lg w-full lg:w-1/3 h-auto"
                        alt="Dog Grooming"
                        sizes="100vw"
                    />
                </div>
            </div>

            <GalleryPreview onSelectImage={handleSelectImage} />
            <Team />
        </section>
    );
};

export default Home;
