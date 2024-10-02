'use client';
import { useState } from 'react';
import Image from 'next/image';
import { SecondaryButton } from './Buttons';

const images = [
    { src: '/dog9.jpg', alt: 'Groomed dog 1' },
    { src: '/dog16.jpg', alt: 'Groomed dog 2' },
    { src: '/dog13.jpg', alt: 'Groomed dog 3' },
    { src: '/dog9.jpg', alt: 'Groomed dog 4' },
    { src: '/dog10.jpg', alt: 'Groomed dog 5' },
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
                            width={400}
                            height={300}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center justify-between m-4">
                <SecondaryButton href="./prices">
                    View Services{' '}
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.6349 5.10352L21.6349 12.1035M21.6349 12.1035L14.6349 19.1035M21.6349 12.1035H3.63489"
                            stroke="#7D53DE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
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
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.3333 21L9.33333 16M9.33333 16L14.3333 11M9.33333 16H22.6667M1 16C1 14.0302 1.38799 12.0796 2.14181 10.2597C2.89563 8.43986 4.00052 6.78628 5.3934 5.3934C6.78628 4.00052 8.43986 2.89563 10.2597 2.14181C12.0796 1.38799 14.0302 1 16 1C17.9698 1 19.9204 1.38799 21.7403 2.14181C23.5601 2.89563 25.2137 4.00052 26.6066 5.3934C27.9995 6.78628 29.1044 8.43986 29.8582 10.2597C30.612 12.0796 31 14.0302 31 16C31 19.9782 29.4196 23.7936 26.6066 26.6066C23.7936 29.4196 19.9782 31 16 31C12.0218 31 8.20644 29.4196 5.3934 26.6066C2.58035 23.7936 1 19.9782 1 16Z"
                                stroke="#7D53DE"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <button onClick={handleNext}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.6667 11L22.6667 16M22.6667 16L17.6667 21M22.6667 16H9.33333M31 16C31 17.9698 30.612 19.9204 29.8582 21.7403C29.1044 23.5601 27.9995 25.2137 26.6066 26.6066C25.2137 27.9995 23.5601 29.1044 21.7403 29.8582C19.9204 30.612 17.9698 31 16 31C14.0302 31 12.0796 30.612 10.2597 29.8582C8.43986 29.1044 6.78628 27.9995 5.3934 26.6066C4.00052 25.2137 2.89563 23.5601 2.14181 21.7403C1.38799 19.9204 1 17.9698 1 16C1 12.0218 2.58035 8.20644 5.3934 5.3934C8.20644 2.58035 12.0218 1 16 1C19.9782 1 23.7936 2.58035 26.6066 5.3934C29.4196 8.20644 31 12.0218 31 16Z"
                                stroke="#7D53DE"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
