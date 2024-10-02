import Image from 'next/image';
import background from '../assets/blue_hero.png';
import logo from '../assets/logo.png';
const ProductInfo = () => {
    return (
        <div>
            <section className="flex justify-center items-center relative h-[50vh] ">
                <Image
                    src={background}
                    alt="Lazy K9 Grooming"
                    className="absolute top-[-50%] left-0 w-full h-[100vh] object-cover opacity-80"
                />

                <h1 className="text-white font-bold text-8xl mb-2 z-10">
                    Products
                </h1>
            </section>

            <div className="mx-auto flex flex-col text-xl gap-32">
                <div className="container flex flex-col items-center lg:items-start space-y-8 lg:space-x-16 mx-auto pb-16 pt-72 z-10">
                    <h1 className="text-primary font-bold text-3xl mb-2">
                        We at Lazy K9 are committed to using the best possible
                        products for your pets.
                    </h1>
                    <p>
                        After years of testing brands and formulas, we have
                        settled on <strong>Iv San Bernard</strong> for our
                        specialty shampoo.
                    </p>
                    <div className="bg-gray-50 p-4 my-4 rounded shadow">
                        <p className="italic">From the ISB US website:</p>
                        <blockquote className="pl-4 border-l-4 border-primary italic">
                            “Iv San Bernard was founded in 1995 and is the
                            leading European manufacturer of animal care
                            products from Italy. ISB produces an array of
                            products designed for various coat types and proper
                            skin management with all products based on natural
                            ingredients. Special attention to the skin, hair and
                            health of the animals through proper product use,
                            selection, technical support and training are ISB’s
                            core attributes. Iv San Bernard, USA is owned and
                            operated by Cliff Faver, DVM where we not only align
                            with the mission of our Italian founder, but also
                            place a special emphasis on education. We teach the
                            Science of Skin & Hair thereby enabling our
                            customers to understand how and why our products
                            work. Our professional expertise allows us to
                            provide solutions to all skin and coat issues from
                            hamsters to horses and we encourage our customers to
                            take their knowledge to another level and become an
                            expert too. We have created a culture of respect for
                            ideas and creativity, kindness, fairness and fun,
                            where we all work together to improve the health of
                            animals.”
                        </blockquote>
                    </div>

                    <p>
                        Lazy K9 also uses <strong>Best Shot shampoo</strong> for
                        routine bathing. Best Shot is one of the most trusted
                        and widely used shampoos in high-end grooming boutiques
                        for deep cleaning, deshedding, and heavily-coated dogs.
                    </p>
                    <p>
                        Our groomers are specifically trained to select the best
                        shampoo for your pet’s coat and skin. Feel free to ask
                        us about our products if your pet is having skin or coat
                        issues!
                    </p>

                    <p>
                        We also offer an add-on deshedding treatment from{' '}
                        <strong>Madra Mor Mud</strong>.
                    </p>
                    <div className="bg-gray-50 p-4 my-4 rounded shadow">
                        <p className="italic">Madra Mor Mud “Shed Safely”</p>
                        <blockquote className="pl-4 border-l-4 border-primary italic">
                            “Shed Safely mud is made with fine, mineral rich
                            clay that exfoliates dry skin and promotes healing
                            and rejuvenation. Shed Safely MUD also includes
                            natural and nourishing ingredients such as
                            allantoin, aloe vera, colloidal oatmeal, and
                            essential omega oils that cleanse and revitalizes
                            your dog’s skin and coat. Vitamin B3: Also known as
                            niacinamide, this essential vitamin increases
                            ceramide, a fatty acid that regulates skin
                            regeneration, prevents the skin from losing water,
                            improves skin barrier function, increasing cell
                            turnover to promote new hair growth. Provitamin B5:
                            Also known as panthenol, this essential vitamin
                            stimulates cell growth and tissue repair. When
                            applied topically, panthenol penetrates the skin and
                            is converted into pantothenic acid, a complex B
                            vitamin. Finally, panthenol gives the coat shine and
                            bounce and causes long-lasting moisture. Multifruit
                            BSC: has strong antioxidant properties, stabilizes
                            collagen fibers, promotes collagen biosynthesis, and
                            decreases capillary permeability and fragility.
                            Contains alpha hydroxy acids that exfoliate skin
                            evenly and prevent clogged hair follicles. Sugar
                            Cane & Sugar Maple Extract: These natural plants
                            contain alpha hydroxy acids that exfoliate skin
                            evenly, prevents clogged follicles, and hydrates the
                            skin and coat.”
                        </blockquote>
                    </div>
                    <p>Price is dependent on the dog&#39;s size and coat.</p>

                    <p>
                        For creative grooming, we use only{' '}
                        <strong>Opawz dye</strong> that has been specifically
                        formulated for use on dogs. Opawz carries a wide range
                        of products, both permanent and temporary, to bring your
                        vision to life. We try to keep basic colors and commonly
                        requested items in stock (chalk, glitter, etc), please
                        ask for a consultation prior to your pet’s appointment
                        so we can be sure to have the necessary supplies and
                        enough time to turn your pet into a work of art.
                    </p>
                    <p className="font-semibold">
                        ** Only well-behaved dogs who are six months old or
                        older, who are accustomed to being groomed, and do not
                        have known skin sensitivities are candidates for
                        creative grooming.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
