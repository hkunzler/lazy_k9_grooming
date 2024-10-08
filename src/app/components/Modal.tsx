import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    image: { src: string; alt: string } | null;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
    if (!isOpen || !image) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
            <div className="relative">
                <button
                    className="top-4 right-4 absolute text-6xl text-primary"
                    onClick={onClose}
                >
                    &times;
                </button>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    sizes="100vw"
                    className="rounded-lg max-w-full max-h-[80vh]"
                />
            </div>
        </div>
    );
};
