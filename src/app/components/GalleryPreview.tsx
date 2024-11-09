'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { SecondaryButton } from './Buttons';

import { GalleryArrow } from './GalleryArrow';
import { GalleryDots } from './GalleryDots';

import lazy_k9__1 from '/public/lazy_k9__9.jpg';
import lazy_k9__2 from '/public/lazy_k9__16.jpg';
import lazy_k9__3 from '/public/lazy_k9__13.jpg';
import lazy_k9__4 from '/public/lazy_k9__9.jpg';
import lazy_k9__5 from '/public/lazy_k9__10.jpg';

interface GalleryImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

interface ImagePreviewProps {
    onSelectImage: (image: GalleryImageProps) => void;
}

const images = [
    { src: lazy_k9__1.src, alt: 'Groomed dog 1', blurDataURL: lazy_k9__1.blurDataURL },
    { src: lazy_k9__2.src, alt: 'Groomed dog 2', blurDataURL: lazy_k9__2.blurDataURL },
    { src: lazy_k9__3.src, alt: 'Groomed dog 3', blurDataURL: lazy_k9__3.blurDataURL },
    { src: lazy_k9__4.src, alt: 'Groomed dog 4', blurDataURL: lazy_k9__4.blurDataURL },
    { src: lazy_k9__5.src, alt: 'Groomed dog 5', blurDataURL: lazy_k9__5.blurDataURL },
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
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${transformPercentage}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 p-2 w-1/3">
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
                    className="sm:flex items-center hidden"
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
