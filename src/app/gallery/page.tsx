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
    blurDataURL: string;
}

const defaultBlurDataURL = 'data:image/jpeg;base64,...';

const generateImages = (count: number): GalleryImageProps[] => {
    return Array.from({ length: count }, (_, i) => ({
        src: `/lazy_k9__${i + 1}.jpg`,
        alt: `Groomed dog ${i + 1}`,
        blurDataURL: defaultBlurDataURL,
    }));
};

const images = generateImages(90);

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
                                    placeholder="blur"
                                    blurDataURL={image.blurDataURL} // Use the default blur data URL
                                    loading="lazy"
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
