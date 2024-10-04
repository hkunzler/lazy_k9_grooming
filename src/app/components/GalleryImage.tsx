import Image from 'next/image';

interface GalleryImageProps {
    src: string;
    alt: string;
    blurDataURL: string;
}

export const GalleryImage = ({ src, alt, blurDataURL }: GalleryImageProps) => {
    return (
        <div className="flex-shrink-0 w-1/3 p-2">
            <Image
                src={src}
                alt={alt}
                placeholder="blur"
                blurDataURL={blurDataURL}
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
    );
};
