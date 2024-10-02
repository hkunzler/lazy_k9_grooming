const Pricing = () => {
    return (
        <div className="container mx-auto flex flex-col items-center lg:items-start space-y-8 lg:space-x-16 mx-auto pb-16 pt-20">
            <h1 className="text-primary font-bold text-3xl mb-4">
                Services and Pricing
            </h1>

            <div className="bg-gray-50 p-6 my-4 rounded shadow space-y-6">
                <p className="text-lg italic">
                    ** Base prices only. Price is dependent on coat condition,
                    type, style, and behavior.
                </p>

                <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">
                        Luxury Bath and Deshed
                    </h3>
                    <p>
                        Includes bath with premium shampoo and conditioner, hand
                        dry and blow out, nail trim, brushing as needed.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>XS (under 15lbs) - starts at $30</li>
                        <li>Small (15-25lbs) - starts at $35</li>
                        <li>Medium (25-50lbs) - starts at $55</li>
                        <li>Large (50-80lbs) - starts at $73</li>
                        <li>XL (80-100lbs) - starts at $80</li>
                        <li>XXL (100lbs+) - starts at $100</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">
                        Luxury Bath and Groom
                    </h3>
                    <p>
                        Includes everything in the Luxury Bath and Deshed, plus
                        a breed standard trim or style according to your tastes!
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>XS (Under 15lbs) - starts at $54</li>
                        <li>Small (15-25lbs) - starts at $60</li>
                        <li>Medium (25-50lbs) - starts at $78</li>
                        <li>Large (50-80lbs) - starts at $90</li>
                        <li>XL (80-100lbs) - starts at $110</li>
                        <li>XXL (100lbs+) - starts at $140</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">
                        A La Carte
                    </h3>
                    <p>
                        Nail trims for maintaining your pet&apos;s grooming between
                        regular visits:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Small dogs (25lbs and under): $10</li>
                        <li>Medium-Large dogs (over 25lbs): $15</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-2 text-primary">
                        Other Services (consultation required)
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
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
