const Services = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold bg-primary">
                        Our Services
                    </h2>
                    <p className="mt-4 text-neutral">
                        We offer a wide range of grooming services including
                        baths, haircuts, and more.
                    </p>
                    <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg">
                        View Services
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-secondary">
                        Our Products
                    </h2>
                    <p className="mt-4 text-neutral">
                        From shampoos to grooming tools, we offer the best
                        products to keep your pets looking great.
                    </p>
                    <button className="mt-4 bg-secondary text-white py-2 px-4 rounded-lg">
                        View Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
