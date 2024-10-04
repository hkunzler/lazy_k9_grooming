interface GalleryArrowProps {
    onClick: () => void;
    direction: 'left' | 'right';
    Icon: JSX.Element;
}

export const GalleryArrow = ({
    onClick,
    direction,
    Icon,
}: GalleryArrowProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full ${
                direction === 'left' ? 'mr-2' : 'ml-2'
            }`}
        >
            {Icon}
        </button>
    );
};
