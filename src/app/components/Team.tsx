import Image from 'next/image';

const Team = () => {
    return (
        <Image
            src="/dog34.jpg"
            alt="Our Team"
            className="w-full h-auto max-w-4xl py-32  mx-auto flex justify-center"
            width={500}
            height={400}
        />
    );
};

export default Team;
