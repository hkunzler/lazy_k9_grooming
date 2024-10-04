import { SecondaryButton } from './Buttons';
import { HeartIcon } from '../assets/HeartIcon';

export const Product = () => {
    return (
        <div className="p-8 flex flex-col gap-4">
            <div className="w-fit ">
                <HeartIcon />
                <h3>Product Info</h3>
            </div>
            <p>
                We offer a range of grooming products specially designed for
                your pets. From shampoos to grooming tools, we ensure the best
                for your furry friends.
            </p>
            <SecondaryButton arrow href="/product-info">
                Products
            </SecondaryButton>
        </div>
    );
};
