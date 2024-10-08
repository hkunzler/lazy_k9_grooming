'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { SecondaryButton } from './Buttons';

import { GalleryArrow } from './GalleryArrow';
import { GalleryDots } from './GalleryDots';

import dog1 from '/public/dog9.jpg';
import dog2 from '/public/dog16.jpg';
import dog3 from '/public/dog13.jpg';
import dog4 from '/public/dog9.jpg';
import dog5 from '/public/dog10.jpg';

interface GalleryImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

interface ImagePreviewProps {
    onSelectImage: (image: GalleryImageProps) => void;
}

const images = [
    { src: dog1.src, alt: 'Groomed dog 1', blurDataURL: dog1.blurDataURL },
    { src: dog2.src, alt: 'Groomed dog 2', blurDataURL: dog2.blurDataURL },
    { src: dog3.src, alt: 'Groomed dog 3', blurDataURL: dog3.blurDataURL },
    { src: dog4.src, alt: 'Groomed dog 4', blurDataURL: dog4.blurDataURL },
    { src: dog5.src, alt: 'Groomed dog 5', blurDataURL: dog5.blurDataURL },
];

const GalleryPreview = ({ onSelectImage }: ImagePreviewProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 3,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < images.length - 3 ? prevIndex + 1 : 0,
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const distance = startX.current - endX;

        if (distance > 50) {
            handleNext();
        } else if (distance < -50) {
            handlePrev();
        }
    };

    const maxTransformIndex = images.length - 3;
    const transformPercentage =
        Math.min(currentIndex, maxTransformIndex) * (100 / 3);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${transformPercentage}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-1/3 p-2">
                        <Image
                            src={image.src ?? ''}
                            alt={image.alt}
                            placeholder="blur"
                            blurDataURL={image.blurDataURL}
                            width={400}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            onClick={() => onSelectImage(image)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center m-4">
                <SecondaryButton arrow href="./prices">
                    View Services
                </SecondaryButton>
                <GalleryDots
                    className="sm:flex hidden items-center"
                    total={images.length - 2}
                    currentIndex={currentIndex}
                    onDotClick={setCurrentIndex}
                />

                <div className="flex gap-4">
                    <GalleryArrow onClick={handlePrev} direction="left" />
                    <GalleryArrow onClick={handleNext} direction="right" />
                </div>
            </div>
        </div>
    );
};

export default GalleryPreview;
