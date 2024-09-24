import { SecondaryButton } from './Buttons';

const Product = () => {
    return (
        <div className="p-8">
            <div className="flex flex-col w-fit gap-4">
                <span className="w-full">
                    <svg
                        width="auto"
                        height="30"
                        viewBox="0 0 21 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.11699 3.23259C2.69912 3.65045 2.36765 4.14653 2.1415 4.6925C1.91535 5.23847 1.79895 5.82364 1.79895 6.41459C1.79895 7.00554 1.91535 7.59071 2.1415 8.13668C2.36765 8.68265 2.69912 9.17873 3.11699 9.59659L10.799 17.2786L18.481 9.59659C19.3249 8.75267 19.799 7.60807 19.799 6.41459C19.799 5.22111 19.3249 4.07651 18.481 3.23259C17.6371 2.38867 16.4925 1.91456 15.299 1.91456C14.1055 1.91456 12.9609 2.38867 12.117 3.23259L10.799 4.55059L9.48099 3.23259C9.06313 2.81472 8.56705 2.48325 8.02108 2.2571C7.47511 2.03095 6.88994 1.91455 6.29899 1.91455C5.70804 1.91455 5.12287 2.03095 4.5769 2.2571C4.03093 2.48325 3.53485 2.81472 3.11699 3.23259Z"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <h1 className="text-3xl font-bold text-primary">
                    Product Info
                </h1>
            </div>
            <p className="mb-4">
                We offer a range of grooming products specially designed for
                your pets. From shampoos to grooming tools, we ensure the best
                for your furry friends.
            </p>
            <SecondaryButton>
                Products 
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.6349 5.10352L21.6349 12.1035M21.6349 12.1035L14.6349 19.1035M21.6349 12.1035H3.63489"
                        stroke="#7D53DE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </SecondaryButton>
        </div>
    );
};

export default Product;
