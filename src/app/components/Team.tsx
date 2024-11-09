import Image from 'next/image';

const Team = () => {
    return (
        <Image
            src="/lazy_k9__34.jpg"
            alt="Our Team"
            className="flex justify-center mx-auto px-4 py-32 w-full max-w-4xl h-auto"
            width={500}
            height={400}
        />
    );
};

export default Team;
