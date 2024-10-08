const Pricing = () => {
    return (
        <div className="flex flex-col items-center lg:items-start lg:space-x-16 space-y-8 mx-auto mx-auto pt-20 pb-16 container">
            <h1 className="mb-4 font-bold text-3xl text-primary">
                Services and Pricing
            </h1>

            <div className="space-y-6 bg-gray-50 shadow my-4 p-6 rounded">
                <p className="text-lg italic">
                    ** Base prices only. Price is dependent on coat condition,
                    type, style, and behavior.
                </p>

                <div>
                    <h3 className="mb-2 font-bold text-primary text-xl">
                        Luxury Bath and Deshed
                    </h3>
                    <p>
                        Includes bath with premium shampoo and conditioner, hand
                        dry and blow out, nail trim, brushing as needed.
                    </p>
                    <ul className="space-y-1 pl-5 list-disc">
                        <li>XS (under 15lbs) - starts at $30</li>
                        <li>Small (15-25lbs) - starts at $35</li>
                        <li>Medium (25-50lbs) - starts at $55</li>
                        <li>Large (50-80lbs) - starts at $73</li>
                        <li>XL (80-100lbs) - starts at $80</li>
                        <li>XXL (100lbs+) - starts at $100</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-bold text-primary text-xl">
                        Luxury Bath and Groom
                    </h3>
                    <p>
                        Includes everything in the Luxury Bath and Deshed, plus
                        a breed standard trim or style according to your tastes!
                    </p>
                    <ul className="space-y-1 pl-5 list-disc">
                        <li>XS (Under 15lbs) - starts at $54</li>
                        <li>Small (15-25lbs) - starts at $60</li>
                        <li>Medium (25-50lbs) - starts at $78</li>
                        <li>Large (50-80lbs) - starts at $90</li>
                        <li>XL (80-100lbs) - starts at $110</li>
                        <li>XXL (100lbs+) - starts at $140</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-bold text-primary text-xl">
                        A La Carte
                    </h3>
                    <p>
                        Nail trims for maintaining your pet&apos;s grooming
                        between regular visits:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc">
                        <li>Small dogs (25lbs and under): $10</li>
                        <li>Medium-Large dogs (over 25lbs): $15</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-2 font-bold text-primary text-xl">
                        Other Services (consultation required)
                    </h3>
                    <ul className="space-y-1 pl-5 list-disc">
                        <li>
                            Fashion colors (permanent and semi-permanent dye)
                        </li>
                        <li>Fashion colors (temporary: chalk and blow pens)</li>
                        <li>Coat design (coat carving)</li>
                        <li>
                            Problem skin consultation (yeast, dander, hot spots,
                            excessive oil, itching, etc)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
