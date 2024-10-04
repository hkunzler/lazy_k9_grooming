interface BioCardProps {
    name: string;
    title: string;
    description: string[];
}

export const BioCard = ({ name, title, description }: BioCardProps) => {
    return (
        <div className="bg-gray-50 p-6 my-4 rounded shadow space-y-8 text-lg font-light">
            <h3 className="font-bold text-2xl mb-2 text-primary">{name}</h3>
            <p className="text-base font-semibold">{title}</p>
            {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};


