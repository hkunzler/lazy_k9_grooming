import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Product from './components/Product';
import Services from './components/Services';
import Team from './components/Team';
import Image from 'next/image';

const GalleryPreview = dynamic(() => import('./components/GalleryPreview'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

const Home = () => {
    return (
        <div className="mx-auto flex flex-col gap-32">
            <Hero />
            <section className="py-16">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-16">
                    <div className="lg:w-1/2 p-8">
                        <h2 className="text-xl text-gray-600 font-bold uppercase mb-4">
                            Luxury Dog Grooming
                        </h2>
                        <h1 className="text-5xl lg:text-6xl text-primary font-bold mb-6">
                            Welcome to Lazy K9 Grooming
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Lazy K9 Grooming, we provide luxury, boutique
                            style grooming services for your beloved dogs. Our
                            experienced groomers use the latest techniques and
                            high-quality products to ensure your dog looks and
                            feels their best.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                            <Services />
                            <Product />
                        </div>
                    </div>
                    <div className="lg:w-1/3 px-4">
                        <Image
                            src="/dog17.jpg"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg"
                            alt="Dog Grooming"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </section>

            <GalleryPreview />
            <Team />
        </div>
    );
};

export default Home;
