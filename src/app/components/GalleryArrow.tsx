import { RightCircleArrowIcon } from '../assets/RightCircleArrowIcon';
import { LeftCircleArrowIcon } from '../assets/LeftCircleArrowIcon';

interface GalleryArrowProps {
    onClick: () => void;
    direction: 'left' | 'right';
}

export const GalleryArrow = ({ onClick, direction }: GalleryArrowProps) => {
    return (
        <button onClick={onClick}>
            {direction === 'left' ? (
                <LeftCircleArrowIcon />
            ) : (
                <RightCircleArrowIcon />
            )}
        </button>
    );
};
