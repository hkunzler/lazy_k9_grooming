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
        <section className="relative h-[50vh] flex justify-center  items-center mb-4 md:mb-32 lg:mb-72">
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
                <h1 className=" text-white font-bold text-5xl md:text-6xl lg:text-8xl text-center">
                    {heading}
                </h1>
            )}
        </section>
    );
};
