import lazy_k9__1 from '/public/lazy_k9__90.jpg';
import lazy_k9__2 from '/public/lazy_k9__44.jpg';
import lazy_k9__3 from '/public/lazy_k9__45.jpg';
import lazy_k9__5 from '/public/lazy_k9__37.jpg';
import walter from '/public/walter.jpeg';

const images = [
    { src: lazy_k9__1.src, alt: 'Groomed dog 1', blurDataURL: lazy_k9__1.blurDataURL },
    { src: lazy_k9__2.src, alt: 'Groomed dog 2', blurDataURL: lazy_k9__2.blurDataURL },
    { src: lazy_k9__3.src, alt: 'Groomed dog 3', blurDataURL: lazy_k9__3.blurDataURL },
    { src: lazy_k9__5.src, alt: 'Groomed dog 5', blurDataURL: lazy_k9__5.blurDataURL },
    { src: walter.src, alt: 'Groomed dog 5', blurDataURL: walter.blurDataURL },
];

export const bios = [
    {
        name: 'Kaly',
        title: 'Owner/Groomer',
        description: [
            'Kaly began her career in the pet industry in 2013 as a retail employee at Petco. A year later, after graduating with a bachelor’s degree in communication, she started bathing dogs at a local salon while trying to find a “real job.” In 2024, this job is about as real as it gets! Kaly is passionate about canine coat health and beauty and every product and service at Lazy K9 reflects that sentiment. In addition to that passion for grooming, Kaly owned a training business for several years and is committed to continuing her education and practicing positive training skills for both the clients on her table and her own pets.',
            'On the rare occasion Kaly isn’t in the salon, she spends time in the beautiful Wyoming outdoors with her three dogs who love to hike and camp, trying new recipes in the kitchen, and practicing amateur photography.',
        ],
        profilePic: images[0],
    },
    {
        name: 'Jessy',
        title: 'Groomer in Training',
        description: [
            'Jessy has lived in the Cody area for most of her life, but began her grooming career as a bather in a local salon in Billings while attending school. However, her experience with handling dogs and making them beautiful is in her blood, as she grew up helping her grandmother in her grooming salon as a child. That is just the beginning of her professional experience, as she spent nearly four years as the lead canine care attendant at the Park County Animal Shelter. Her training in that position made her a perfect candidate for learning to groom at Lazy K9, as we specialize in gentle, fear-free handling and helping nervous dogs learn to enjoy their spa days. We are so excited about the potential she has and we can’t wait to see how her skills grow with us.',
            'When Jessy isn’t making dogs beautiful at the salon, you can find her outside taking long walks or on her paddleboard, enjoying Wyoming’s endless hiking trails and fishing opportunities, or reading a good book.',
        ],
        profilePic: images[1],
    },
    {
        name: 'Rhianna',
        title: 'Grooming Technician',
        description: [
            'Rhianna came to us in 2023 after earning her bachelor’s degree in psychology. She quickly caught on and became a confident, gentle handler of her charges. When she isn’t prepping dogs for Kaly and Jessy, she completes her own bath and deshed services for short and medium coated clients and often mans the front desk, checking clients in and out. There are no good haircuts without good prep work, and Rhianna has mastered that skill. We are so thankful to have her on board!',
            'When Rhianna isn’t getting covered with dog hair in the salon, she enjoys a cozy life with lots of good books and spending time with her family, especially her senior chihuahua mix, Rascal.',
        ],
        profilePic: images[2],
    },

    {
        name: 'Addie',
        title: 'All-around Support Staff',
        description: [
            'Addie is always sporting the latest in creative color! She has been Kaly’s muse for eight years. She’s been coming to work since she was adopted at a year old and hasn’t looked back. Addie is happy to greet new clients and dogs, let new employees practice their skills on her uniquely styled coat, and take long naps on any one of the numerous comfy beds in the salon. She always has something to say (sometimes loud things) but it’s always said with love!',
        ],
        profilePic: images[3],
    },
    {
        name: 'Walter',
        title: 'Front of House Supervisor',
        description: [
            'Walter came to us in 2024 after a stint in the Park County Animal Shelter. We weren’t hiring, but he demanded an interview anyway and was very convincing. Today, Walter makes sure to greet everyone who comes through the doors (unless he is on a break), giving the groomers loud pep talks, and occasionally dashes out the door when an unsuspecting client closes it too slowly, just to keep everyone on their toes. He also is in charge of entertaining waiting clients by sitting on their laps and begging for belly rubs.',
            'When he isn’t on duty, Walter enjoys a good roll in some catnip, distracting the groomers with his cuteness, and monitoring the neighborhood through the windows.',
        ],
        profilePic: images[4],
    },
];
