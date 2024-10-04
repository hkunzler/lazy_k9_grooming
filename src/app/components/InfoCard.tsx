import { SecondaryButton } from './Buttons';

interface InfoCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    arrow?: boolean;
}

export const InfoCard = ({
    icon,
    title,
    description,
    buttonText,
    buttonHref,
    arrow = false,
}: InfoCardProps) => {
    return (
        <div className="p-8 flex flex-col gap-4">
            <div className="w-fit">
                {icon}
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <SecondaryButton arrow={arrow} href={buttonHref}>
                {buttonText}
            </SecondaryButton>
        </div>
    );
};
