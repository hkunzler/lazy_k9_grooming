import Image from 'next/image';

interface ImageProps {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
}
interface HeroProps {
    heading?: string;
    background?: ImageProps;
    logo?: ImageProps;
    className?: string;
}

export const Hero = ({ heading, background, logo, className }: HeroProps) => {
    return (
        <section className="relative flex justify-center items-center mb-4 md:mb-32 lg:mb-72 h-[50vh]">
            {background && (
                <Image
                    priority
                    src={background.src}
                    placeholder="blur"
                    blurDataURL={background.blurDataURL}
                    alt="Background image"
                    layout="fill"
                    objectFit="cover"
                    className={`absolute top-[-50%] -z-10 left-0 w-full h-[100vh] overflow-visible ${className}`}
                />
            )}
            {logo && (
                <Image
                    placeholder="blur"
                    blurDataURL={logo.blurDataURL}
                    src={logo.src}
                    alt="Logo"
                    fill
                    objectFit={'contain'}
                />
            )}
            {heading && (
                <h1 className="white-shadow m-8 font-bold text-8xl text-black text-center">
                    {heading}
                </h1>
            )}
        </section>
    );
};
