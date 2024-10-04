'use client';
import { useState, useRef } from 'react';
import { SecondaryButton } from './Buttons';
import { ArrowIcon } from '../assets/ArrowIcon';
import { RightCircleArrowIcon } from '../assets/RightCircleArrowIcon';
import { LeftCircleArrowIcon } from '../assets/LeftCircleArrowIcon';
import { GalleryArrow } from './GalleryArrow';
import { GalleryDots } from './GalleryDots';
import { GalleryImage } from './GalleryImage';

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
                    <GalleryImage
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        blurDataURL={image.blurDataURL}
                    />
                ))}
            </div>
            <div className="flex justify-between items-center m-4">
                <SecondaryButton arrow href="./prices">View Services</SecondaryButton>
                <GalleryDots
                    total={images.length - 2}
                    currentIndex={currentIndex}
                    onDotClick={setCurrentIndex}
                />
                <div className="flex gap-4">
                    <GalleryArrow
                        onClick={handlePrev}
                        direction="left"
                        Icon={<LeftCircleArrowIcon />}
                    />
                    <GalleryArrow
                        onClick={handleNext}
                        direction="right"
                        Icon={<RightCircleArrowIcon />}
                    />
                </div>
            </div>
        </div>
    );
}
