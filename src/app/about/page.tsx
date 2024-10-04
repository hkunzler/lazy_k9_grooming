import Image from 'next/image';
import { BioCard } from '../components/BioCard';
import background from '../assets/pink_blue_hero.png';
import { bios } from '../data/bios';

const About = () => {
    return (
        <div>
            <div className="flex justify-center items-center relative h-[50vh]">
                <Image
                    src={background}
                    alt="Lazy K9 Grooming"
                    className="absolute z-[-10] top-[-50%] left-0 w-full h-[100vh] object-cover"
                />
                <h1 className="text-white font-bold text-6xl lg:text-8xl mb-2">
                    Employee Bios
                </h1>
            </div>

            <div className="container flex flex-col mx-auto px-4 lg:px-8 pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    {bios.map((bio, index) => (
                        <BioCard
                            key={index}
                            name={bio.name}
                            title={bio.title}
                            description={bio.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
