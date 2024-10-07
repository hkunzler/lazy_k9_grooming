import { bios } from '../data/bios';
import { BioCard } from '../components/BioCard';
import background from '/public/pink_blue_hero.png';
import { Hero } from '../components/Hero';

const About = () => {
    return (
        <div>
            <Hero heading="Employee Bios" background={{ ...background }} />

            <div className="container mx-auto px-4 lg:px-8 pt-20 pb-16">
                <div className="grid grid-cols-1 gap-8">
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
