interface BioCardProps {
    name: string;
    title: string;
    description: string[];
}

export const BioCard = ({ name, title, description }: BioCardProps) => {
    return (
        <div className="space-y-8 bg-gray-50 shadow my-4 p-6 rounded font-light text-lg">
            <h3 className="mb-2 font-bold text-2xl text-primary">{name}</h3>
            <p className="font-semibold text-base">{title}</p>
            {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};
