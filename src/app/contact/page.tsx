const Contact = () => {
    return (
        <div className="container mx-auto flex flex-col items-center lg:items-start space-y-8 lg:space-x-16 mx-auto pb-16 pt-20">
            <h1 className="text-primary font-bold text-3xl mb-4 text-center">
                Contact Us
            </h1>

            <div className="bg-gray-50 p-6 my-4 rounded shadow w-full max-w-5xl">
                <div className="space-y-6">
                    <div>
                        <h2 className="font-bold text-2xl mb-2 text-primary">
                            Our Location
                        </h2>
                        <p>
                            106 N Bent St Suite B<br />
                            Powell, WY 82435
                        </p>
                        <p>Phone: (406) 597-1527</p>
                        <p>Email: contact@lazyk9grooming.com</p>
                    </div>

                    <div
                        className="relative w-full"
                        style={{ paddingBottom: '56.25%' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11333.421882723911!2d-108.7581884!3d44.7531647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534953d6c1779d2d%3A0xfbdd611e3506b309!2sLazy%20K9%20Grooming!5e0!3m2!1sen!2sus!4v1726170750238!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                            allowFullScreen={false}
                            loading="lazy"
                            aria-hidden="false"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
