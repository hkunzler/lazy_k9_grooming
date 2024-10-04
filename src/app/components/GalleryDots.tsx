interface GalleryDotsProps {
    total: number;
    currentIndex: number;
    onDotClick: (index: number) => void;
}

export const GalleryDots = ({
    total,
    currentIndex,
    onDotClick,
}: GalleryDotsProps) => {
    return (
        <div className="flex gap-2">
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
