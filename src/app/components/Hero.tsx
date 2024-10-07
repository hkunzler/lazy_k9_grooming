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
        <section className="relative h-[50vh] flex justify-center  items-center">
            {background && (
                <Image
                    priority
                    src={background.src}
                    placeholder="blur"
                    blurDataURL={background.blurDataURL}
                    alt="Background image"
		    fill
                    className={`absolute top-[-50%] -z-10 left-0 w-full h-[100vh] overflow-visible ${className}`}
		    objectFit={"cover"}
                />
            )}
            {logo && (
                <Image
                    priority
                    src={logo}
                    alt="Logo"
                    fill
                    objectFit={"contain"}
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
