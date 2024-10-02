import Link from 'next/link';

export const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary">
            {children}
        </button>
    );
};

export const SecondaryButton = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <Link href={href}>
            <button className="text-primary font-bold py-2 px-4 border-2 border-primary rounded-lg hover:border-secondary hover:text-secondary flex gap-4">
                {children}
            </button>
        </Link>
    );
};
