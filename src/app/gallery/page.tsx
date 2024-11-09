'use client';

import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Hero } from '../components/Hero';
import { Modal } from '../components/Modal';
import background from '/public/orange_yellow_hero.png';

interface GalleryImageProps {
    src: string;
    alt: string;
}

const images = [
    { src: '/lazy_k9__1.jpg', alt: 'Groomed dog 1' },
    { src: '/lazy_k9__2.jpg', alt: 'Groomed dog 2' },
    { src: '/lazy_k9__3.jpg', alt: 'Groomed dog 3' },
    { src: '/lazy_k9__4.jpg', alt: 'Groomed dog 4' },
    { src: '/lazy_k9__5.jpg', alt: 'Groomed dog 5' },
    { src: '/lazy_k9__6.jpg', alt: 'Groomed dog 6' },
    { src: '/lazy_k9__7.jpg', alt: 'Groomed dog 7' },
    { src: '/lazy_k9__8.jpg', alt: 'Groomed dog 8' },
    { src: '/lazy_k9__9.jpg', alt: 'Groomed dog 9' },
    { src: '/lazy_k9__10.jpg', alt: 'Groomed dog 10' },
    { src: '/lazy_k9__11.jpg', alt: 'Groomed dog 11' },
    { src: '/lazy_k9__12.jpg', alt: 'Groomed dog 12' },
    { src: '/lazy_k9__13.jpg', alt: 'Groomed dog 13' },
    { src: '/lazy_k9__14.jpg', alt: 'Groomed dog 14' },
    { src: '/lazy_k9__15.jpg', alt: 'Groomed dog 15' },
    { src: '/lazy_k9__16.jpg', alt: 'Groomed dog 16' },
    { src: '/lazy_k9__17.jpg', alt: 'Groomed dog 17' },
    { src: '/lazy_k9__18.jpg', alt: 'Groomed dog 18' },
    { src: '/lazy_k9__19.jpg', alt: 'Groomed dog 19' },
    { src: '/lazy_k9__20.jpg', alt: 'Groomed dog 20' },
    { src: '/lazy_k9__21.jpg', alt: 'Groomed dog 21' },
    { src: '/lazy_k9__22.jpg', alt: 'Groomed dog 22' },
    { src: '/lazy_k9__23.jpg', alt: 'Groomed dog 23' },
    { src: '/lazy_k9__24.jpg', alt: 'Groomed dog 24' },
    { src: '/lazy_k9__25.jpg', alt: 'Groomed dog 25' },
    { src: '/lazy_k9__26.jpg', alt: 'Groomed dog 26' },
    { src: '/lazy_k9__27.jpg', alt: 'Groomed dog 27' },
    { src: '/lazy_k9__28.jpg', alt: 'Groomed dog 28' },
    { src: '/lazy_k9__29.jpg', alt: 'Groomed dog 29' },
    { src: '/lazy_k9__30.jpg', alt: 'Groomed dog 30' },
    { src: '/lazy_k9__31.jpg', alt: 'Groomed dog 31' },
    { src: '/lazy_k9__32.jpg', alt: 'Groomed dog 32' },
    { src: '/lazy_k9__33.jpg', alt: 'Groomed dog 33' },
    { src: '/lazy_k9__34.jpg', alt: 'Groomed dog 34' },
    { src: '/lazy_k9__35.jpg', alt: 'Groomed dog 35' },
    { src: '/lazy_k9__36.jpg', alt: 'Groomed dog 36' },
    { src: '/lazy_k9__37.jpg', alt: 'Groomed dog 37' },
    { src: '/lazy_k9__38.jpg', alt: 'Groomed dog 38' },
    { src: '/lazy_k9__39.jpg', alt: 'Groomed dog 39' },
    { src: '/lazy_k9__40.jpg', alt: 'Groomed dog 40' },
];

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] =
        useState<GalleryImageProps | null>(null);

    const openModal = (image: GalleryImageProps) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <>
            <section className="relative h-[60vh]">
                <Hero heading="Lazy K9 Models" background={{ ...background }} />
            </section>
            <section className="px-4 py-16">
                <div className="mx-auto container">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex mx-2 -ml-4"
                        columnClassName="pl-4"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative mb-4 w-full"
                                onClick={() => openModal(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="shadow-lg rounded-lg"
                                    width={400}
                                    height={300}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                image={selectedImage}
                onClose={closeModal}
            />
        </>
    );
};

export default Gallery;
