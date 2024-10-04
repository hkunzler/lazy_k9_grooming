'use client';
import { useState } from 'react';
import Image from 'next/image';

import { SecondaryButton } from './Buttons';
import { ArrowIcon } from '../assets/ArrowIcon';
import { RightCircleArrowIcon } from '../assets/RightCircleArrowIcon';
import { LeftCircleArrowIcon } from '../assets/LeftCircleArrowIcon';

import dog1 from '/public/dog9.jpg';
import dog2 from '/public/dog16.jpg';
import dog3 from '/public/dog13.jpg';
import dog4 from '/public/dog9.jpg';
import dog5 from '/public/dog10.jpg';

const images = [
    { src: dog1.src, alt: 'Groomed dog 1', blurDataURL: dog1.blurDataURL },
    { src: dog2.src, alt: 'Groomed dog 2', blurDataURL: dog2.blurDataURL },
    { src: dog3.src, alt: 'Groomed dog 3', blurDataURL: dog3.blurDataURL },
    { src: dog4.src, alt: 'Groomed dog 4', blurDataURL: dog4.blurDataURL },
    { src: dog5.src, alt: 'Groomed dog 5', blurDataURL: dog5.blurDataURL },
];

export default function GalleryPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>
        setCurrentIndex((currentIndex) =>
            currentIndex > 0 ? currentIndex - 1 : images.length - 3,
        );

    const handleNext = () =>
        setCurrentIndex((currentIndex) =>
            currentIndex + 2 < images.length - 1 ? currentIndex + 1 : 0,
        );

    const maxTransformIndex = images.length - 3;
    const transformPercentage =
        Math.min(currentIndex, maxTransformIndex) * (100 / 3);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${transformPercentage}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-1/3 p-2"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            placeholder="blur"
                            blurDataURL={image.blurDataURL}
                            width={400}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center justify-between m-4">
                <SecondaryButton href="./prices">
                    View Services <ArrowIcon />
                </SecondaryButton>

                <div className="flex justify-center space-x-2 mt-4">
                    {[...Array(images.length - 2)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-secondary' : 'bg-primary'}`}
                        ></button>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button onClick={handlePrev}>
                        <LeftCircleArrowIcon />
                    </button>
                    <button onClick={handleNext}>
                        <RightCircleArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
