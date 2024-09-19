export const PrimaryButton = ({ children }) => {
    return (
        <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary">
            {children}
        </button>
    );
};

export const SecondaryButton = ({ children }) => {
    return (
        <button className="text-primary font-bold py-2 px-4 border-2 border-primary rounded-lg hover:border-secondary hover:text-secondary flex gap-4">
            {children}
        </button>
    );
};
