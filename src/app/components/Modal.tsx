import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    image: { src: string; alt: string } | null;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
    if (!isOpen || !image) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative">
                <button
                    className="absolute top-4 right-4 text-primary text-6xl"
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
                    className="max-w-full max-h-[80vh] rounded-lg"
                />
            </div>
        </div>
    );
};
