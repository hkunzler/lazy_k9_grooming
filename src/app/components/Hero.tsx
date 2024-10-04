import Image from 'next/image';
import background from '/public/hero_background.png';
import logo from '/public/logo.png';

const Hero = () => {
    return (
        <section className="relative h-[50vh] ">
            <Image
                priority
                src={background}
                placeholder="blur"
                blurDataURL={background.blurDataURL}
                alt="Lazy K9 Grooming"
                className="absolute top-[-50%] -z-10 left-0 w-full h-[100vh] object-cover"
            />
            <Image
                priority
                placeholder="blur"
                blurDataURL={logo.blurDataURL}
                src={logo}
                alt="Lazy K9 Grooming"
                fill
                style={{
                    objectFit: 'contain',
                }}
            />
        </section>
    );
};

export default Hero;
