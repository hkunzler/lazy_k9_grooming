import Image from 'next/image';
import background from '../assets/hero_background.svg';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <section className="relative h-[50vh] ">
            <Image
                src={background}
                alt="Lazy K9 Grooming"
                className="absolute top-[-30%] left-0 w-full h-[70vh] object-cover"
            />
	     <Image
                src={logo}
                alt="Lazy K9 Grooming"
                className="absolute left-0 w-full h-[70vh] object-contain"
            />
        </section>
    );
};

export default Hero;
