'use client';

import Masonry from 'react-masonry-css';
import Image from 'next/image';
import bg from '../assets/bg.png';
const images = [
    { src: '/dog1.jpg', alt: 'Groomed dog 1' },
    { src: '/dog2.jpg', alt: 'Groomed dog 2' },
    { src: '/dog3.jpg', alt: 'Groomed dog 3' },
    { src: '/dog4.jpg', alt: 'Groomed dog 4' },
    { src: '/dog5.jpg', alt: 'Groomed dog 5' },
    { src: '/dog6.jpg', alt: 'Groomed dog 6' },
    { src: '/dog7.jpg', alt: 'Groomed dog 7' },
    { src: '/dog8.jpg', alt: 'Groomed dog 8' },
    { src: '/dog9.jpg', alt: 'Groomed dog 9' },
    { src: '/dog10.jpg', alt: 'Groomed dog 10' },
    { src: '/dog11.jpg', alt: 'Groomed dog 11' },
    { src: '/dog12.jpg', alt: 'Groomed dog 12' },
    { src: '/dog13.jpg', alt: 'Groomed dog 13' },
    { src: '/dog14.jpg', alt: 'Groomed dog 14' },
    { src: '/dog15.jpg', alt: 'Groomed dog 15' },
    { src: '/dog16.jpg', alt: 'Groomed dog 16' },
    { src: '/dog17.jpg', alt: 'Groomed dog 17' },
    { src: '/dog18.jpg', alt: 'Groomed dog 18' },
    { src: '/dog19.jpg', alt: 'Groomed dog 19' },
    { src: '/dog20.jpg', alt: 'Groomed dog 20' },
    { src: '/dog21.jpg', alt: 'Groomed dog 21' },
    { src: '/dog22.jpg', alt: 'Groomed dog 22' },
    { src: '/dog23.jpg', alt: 'Groomed dog 23' },
    { src: '/dog24.jpg', alt: 'Groomed dog 24' },
    { src: '/dog25.jpg', alt: 'Groomed dog 25' },
    { src: '/dog26.jpg', alt: 'Groomed dog 26' },
    { src: '/dog27.jpg', alt: 'Groomed dog 27' },
    { src: '/dog28.jpg', alt: 'Groomed dog 28' },
    { src: '/dog29.jpg', alt: 'Groomed dog 29' },
    { src: '/dog30.jpg', alt: 'Groomed dog 30' },
    { src: '/dog31.jpg', alt: 'Groomed dog 31' },
    { src: '/dog32.jpg', alt: 'Groomed dog 32' },
    { src: '/dog33.jpg', alt: 'Groomed dog 33' },
    { src: '/dog34.jpg', alt: 'Groomed dog 34' },
    { src: '/dog35.jpg', alt: 'Groomed dog 35' },
    { src: '/dog36.jpg', alt: 'Groomed dog 36' },
    { src: '/dog37.jpg', alt: 'Groomed dog 37' },
    { src: '/dog38.jpg', alt: 'Groomed dog 38' },
    { src: '/dog39.jpg', alt: 'Groomed dog 39' },
    { src: '/dog40.jpg', alt: 'Groomed dog 40' },
];

const Gallery = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <>
            <section className="relative h-[60vh]">
                <Image
                    src={bg}
                    alt="Lazy K9 Grooming"
                    className="absolute top-[-30%] left-0 w-full object-contain"
                />

                <div className="relative z-10 flex flex-col justify-center items-center h-screen text-white">
                    <h2 className="text-8xl font-bold mb-4">Lazy K9 Models</h2>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex -ml-4 mx-2"
                        columnClassName="pl-4"
                    >
                        {images.map((image, index) => (
                            <div key={index} className="mb-4 w-full relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-lg shadow-lg"
                                    layout="responsive"
                                    objectFit="cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </section>
        </>
    );
};

export default Gallery;