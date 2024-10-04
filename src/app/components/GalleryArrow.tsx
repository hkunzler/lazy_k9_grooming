import { RightCircleArrowIcon } from '../assets/RightCircleArrowIcon';
import { LeftCircleArrowIcon } from '../assets/LeftCircleArrowIcon';

interface GalleryArrowProps {
    onClick: () => void;
    direction: 'left' | 'right';
}

export const GalleryArrow = ({
    onClick,
    direction,
}: GalleryArrowProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full ${
                direction === 'left' ? 'mr-2' : 'ml-2'
            }`}
        >
            {direction === 'left' ? <LeftCircleArrowIcon /> : <RightCircleArrowIcon />}
        </button>
    );
};
