import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Team from './components/Team';
import Image from 'next/image';
import { Spinner } from './components/Spinner';
import { InfoCard } from './components/InfoCard';
import { StarIcon } from './assets/StarIcon';
import { HeartIcon } from './assets/HeartIcon';

const GalleryPreview = dynamic(() => import('./components/GalleryPreview'), {
    loading: () => <Spinner />,
    ssr: false,
});

const cards = [
    {
        icon: <StarIcon />,
        title: 'Our Services',
        description:
            'We offer a range of grooming products specially designed for your pets. From shampoos to grooming tools, we ensure the best for your furry friends.',
        buttonText: 'Services',
        buttonHref: './prices',
        arrow: true,
    },
    {
        icon: <HeartIcon />,
        title: 'Product Info',
        description:
            'We offer a range of grooming products specially designed for your pets. From shampoos to grooming tools, we ensure the best for your furry friends.',
        buttonText: 'Products',
        buttonHref: '/product-info',
        arrow: true,
    },
];

const Home = () => {
    return (
        <div className="mx-auto flex flex-col gap-32">
            <Hero />
            <section className="py-16">
                <div className="container flex flex-col justify-around mx-auto lg:flex-row items-center lg:space-x-16">
                    <div className="lg:w-1/2 p-8">
                        <h2>Luxury Dog Grooming</h2>
                        <h1>Welcome to Lazy K9 Grooming</h1>
                        <p>
                            At Lazy K9 Grooming, we provide luxury, boutique
                            style grooming services for your beloved dogs. Our
                            experienced groomers use the latest techniques and
                            high-quality products to ensure your dog looks and
                            feels their best.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                            {cards.map((card, index) => (
                                <InfoCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                    <Image
                        src="/dog17.jpg"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg w-full h-auto lg:w-1/3 px-4"
                        alt="Dog Grooming"
                        sizes="100vw"
                    />
                </div>
            </section>

            <GalleryPreview />
            <Team />
        </div>
    );
};

export default Home;
