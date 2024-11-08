import Image from 'next/image';

interface BioCardProps {
    index: number;
    name: string;
    title: string;
    description: string[];
    profilePic?: {
        src: string;
        alt: string;
        blurDataURL?: string;
    };
}

export const BioCard = ({
    index,
    name,
    title,
    description,
    profilePic,
}: BioCardProps) => {
    const isImageFirst = index % 2 === 0;

    return (
        <div className="bg-gray-50 shadow my-4 p-6 rounded font-light text-lg">
            <div
                className={`flex flex-col md:flex-row ${isImageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center space-y-4 md:space-y-0 md:space-x-4`}
            >
                {profilePic && (
                    <Image
                        src={profilePic.src ?? ''}
                        alt={profilePic.alt ?? ''}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="flex-1"
                    />
                )}
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-2xl text-primary">{name}</h3>
                    <p className="font-semibold text-base">{title}</p>
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
