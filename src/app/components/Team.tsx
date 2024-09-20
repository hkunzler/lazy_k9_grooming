import Image from 'next/image';

const Team = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-6xl text-primary font-bold mb-6">
                    Our Team
                </h1>
                <Image
                    src="/dog34.jpg"
                    alt="Our Team"
                    className="w-full h-auto object-contain max-w-8xl "
                    width={500}
                    height={400}
                />
            </div>
        </div>
    );
};

export default Team;
