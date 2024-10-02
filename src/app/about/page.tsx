import Image from 'next/image';
import background from '../assets/pink_blue_hero.png';

const About = () => {
    return (
        <div>
            <section className="flex justify-center items-center relative h-[50vh] ">
                <Image
                    src={background}
                    alt="Lazy K9 Grooming"
                    className="absolute z-[-10] top-[-50%] left-0 w-full h-[100vh] object-cover"
                />

                <h1 className="text-white font-bold text-6xl lg:text-8xl mb-2 ">
                    Employee Bios
                </h1>
            </section>
            <div className="container mx-auto flex flex-col items-center lg:items-start space-y-8 lg:space-x-16 mx-auto pb-16 pt-20">
                <div className="bg-gray-50 p-6 my-4 rounded shadow space-y-8 text-lg font-light">
                    <div>
                        <h3 className="font-bold text-2xl mb-2 text-primary">
                            Jessy
                        </h3>
                        <p className="text-base font-semibold">
                            Groomer in Training
                        </p>
                        <p>
                            Jessy has lived in the Cody area for most of her
                            life, but began her grooming career as a bather in a
                            local salon in Billings while attending school.
                            However, her experience with handling dogs and
                            making them beautiful is in her blood, as she grew
                            up helping her grandmother in her grooming salon as
                            a child. That is just the beginning of her
                            professional experience, as she spent nearly four
                            years as the lead canine care attendant at the Park
                            County Animal Shelter. Her training in that position
                            made her a perfect candidate for learning to groom
                            at Lazy K9, as we specialize in gentle, fear-free
                            handling and helping nervous dogs learn to enjoy
                            their spa days. We are so excited about the
                            potential she has and we can’t wait to see how her
                            skills grow with us.
                        </p>
                        <p>
                            When Jessy isn’t making dogs beautiful at the salon,
                            you can find her outside taking long walks or on her
                            paddleboard, enjoying Wyoming’s endless hiking
                            trails and fishing opportunities, or reading a good
                            book.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-2 text-primary">
                            Rhianna
                        </h3>
                        <p className="text-base font-semibold">
                            Grooming Technician
                        </p>
                        <p>
                            Rhianna came to us in 2023 after earning her
                            bachelor’s degree in psychology. She quickly caught
                            on and became a confident, gentle handler of her
                            charges. When she isn’t prepping dogs for Kaly and
                            Jessy, she completes her own bath and deshed
                            services for short and medium coated clients and
                            often mans the front desk, checking clients in and
                            out. There are no good haircuts without good prep
                            work, and Rhianna has mastered that skill. We are so
                            thankful to have her on board!
                        </p>
                        <p>
                            When Rhianna isn’t getting covered with dog hair in
                            the salon, she enjoys a cozy life with lots of good
                            books and spending time with her family, especially
                            her senior chihuahua mix, Rascal.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-2 text-primary">
                            Kaly
                        </h3>
                        <p className="text-base font-semibold">Owner/Groomer</p>
                        <p>
                            Kaly began her career in the pet industry in 2013 as
                            a retail employee at Petco. A year later, after
                            graduating with a bachelor’s degree in
                            communication, she started bathing dogs at a local
                            salon while trying to find a “real job.” In 2024,
                            this job is about as real as it gets! Kaly is
                            passionate about canine coat health and beauty and
                            every product and service at Lazy K9 reflects that
                            sentiment. In addition to that passion for grooming,
                            Kaly owned a training business for several years and
                            is committed to continuing her education and
                            practicing positive training skills for both the
                            clients on her table and her own pets.
                        </p>
                        <p>
                            On the rare occasion Kaly isn’t in the salon, she
                            spends time in the beautiful Wyoming outdoors with
                            her three dogs who love to hike and camp, trying new
                            recipes in the kitchen, and practicing amateur
                            photography.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-2 text-primary">
                            Walter
                        </h3>
                        <p className="text-base font-semibold">
                            Front of House Supervisor
                        </p>
                        <p>
                            Walter came to us in 2024 after a stint in the Park
                            County Animal Shelter. We weren’t hiring, but he
                            demanded an interview anyway and was very
                            convincing. Today, Walter makes sure to greet
                            everyone who comes through the doors (unless he is
                            on a break), giving the groomers loud pep talks, and
                            occasionally dashes out the door when an
                            unsuspecting client closes it too slowly, just to
                            keep everyone on their toes. He also is in charge of
                            entertaining waiting clients by sitting on their
                            laps and begging for belly rubs.
                        </p>
                        <p>
                            When he isn’t on duty, Walter enjoys a good roll in
                            some catnip, distracting the groomers with his
                            cuteness, and monitoring the neighborhood through
                            the windows.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl mb-2 text-primary">
                            Addie
                        </h3>
                        <p className="text-base font-semibold">
                            All-around Support Staff
                        </p>
                        <p>
                            Addie is always sporting the latest in creative
                            color! She has been Kaly’s muse for eight years.
                            She’s been coming to work since she was adopted at a
                            year old and hasn’t looked back. Addie is happy to
                            greet new clients and dogs, let new employees
                            practice their skills on her uniquely styled coat,
                            and take long naps on any one of the numerous comfy
                            beds in the salon. She always has something to say
                            (sometimes loud things) but it’s always said with
                            love!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
