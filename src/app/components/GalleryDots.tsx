interface GalleryDotsProps {
    total: number;
    currentIndex: number;
    onDotClick: (index: number) => void;
    className?: string;
}

export const GalleryDots = ({
    total,
    currentIndex,
    onDotClick,
    className = '',
}: GalleryDotsProps) => {
    return (
        <div className={`flex justify-center gap-2 ${className}`}>
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? 'bg-secondary' : 'bg-primary'
                    }`}
                ></button>
            ))}
        </div>
    );
};
