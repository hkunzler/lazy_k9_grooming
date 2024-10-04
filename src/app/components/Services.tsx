import { SecondaryButton } from './Buttons';
import { StarIcon } from '../assets/StarIcon';

export const Services = () => {
    return (
        <div className="p-8 flex flex-col gap-4">
            <div className="w-fit">
                <StarIcon />
                <h3>Our Services</h3>
            </div>
            <p>
                We offer a range of grooming products specially designed for
                your pets. From shampoos to grooming tools, we ensure the best
                for your furry friends.
            </p>
            <SecondaryButton arrow href="./prices">
                Services
            </SecondaryButton>
        </div>
    );
};
