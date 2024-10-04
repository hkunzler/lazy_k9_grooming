interface StarIconProps {
    className?: string;
}

export const StarIcon: React.FC<StarIconProps> = ({ className }) => {
    return (
        <svg
            className={className}
            width="auto"
            height="30"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.0957 1.52344V5.52344M1.0957 3.52344H5.0957M4.0957 15.5234V19.5234M2.0957 17.5234H6.0957M11.0957 1.52344L13.3817 8.38044L19.0957 10.5234L13.3817 12.6664L11.0957 19.5234L8.8097 12.6664L3.0957 10.5234L8.8097 8.38044L11.0957 1.52344Z"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
