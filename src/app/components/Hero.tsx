import Image from 'next/image';
import logo from '../assets/hero_logo.png';

const Hero = () => {
    return (
        <section className="relative h-[50vh] ">
            <Image
                src={logo}
                alt="Lazy K9 Grooming"
                className="absolute top-[-30%] left-0 w-full h-[70vh] object-cover"
            />
        </section>
    );
};

export default Hero;
