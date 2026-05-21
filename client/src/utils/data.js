import gallery1 from "../assets/images/trip1.jpeg";
import gallery2 from "../assets/images/trip2.jpeg";
import gallery3 from "../assets/images/trip3.jpeg";
import gallery4 from "../assets/images/kagbhusandi.jpeg";
import gallery6 from "../assets/images/trip.jpeg";
import badrinath from "../assets/images/badrinath.jpeg";
import badrinath2 from "../assets/images/badrinath2.png";
import valley2 from "../assets/images/valley2.png";

import satopanth from "../assets/images/satopanth.jpeg";
import valleyImage from "../assets/images/valleyImage.jpeg";
import kuariImage from "../assets/images/trip2.jpeg";

import tulip_valley_of_flower from "../assets/images/valley-of-flower/tulip_valley_of_flowers.jpeg";
import valley_bridge from "../assets/images/valley-of-flower/Valley_bridge.jpg";
import valley_of_flowers from "../assets/images/valley-of-flower/valley_of_flowers.jpg";
import Valley_Start from "../assets/images/valley-of-flower/Valley_Start.jpeg";
import Valley from "../assets/images/valley-of-flower/Valley.jpg";

export const destinations = [
  {
    id: "valley-of-flowers",

    name: "Valley of Flowers Trek",

    location: "Chamoli, Uttarakhand",

    imageUrl: valley_bridge,

    gallery: [
      valley_bridge,
      valleyImage,
      valley_of_flowers,
      tulip_valley_of_flower,
      Valley_Start,
    ],

    duration: "6 Days",

    difficulty: "Easy to Moderate",

    altitude: "14,107 ft",

    bestSeason: "July - Aug",

    price: "₹12,999",

    trekingDistance: "36km",

    region: "Chamoli, UK",

    explorerNote:
      "A UNESCO World Heritage Site hidden in the Garhwal Himalayas, famous for its alpine meadows, waterfalls, glaciers, and over 600 species of Himalayan flowers.",

    quickFacts: [
      {
        title: "Why It's Special",
        points: [
          "UNESCO World Heritage Site",
          "Over 600 species of alpine flowers",
          "Located inside Nanda Devi Biosphere Reserve",
          "One of India's most scenic monsoon treks",
        ],
      },

      {
        title: "Trail Experience",
        points: [
          "Beginner friendly Himalayan trek",
          "Dense forests, rivers & waterfalls",
          "Views of snow-covered Himalayan peaks",
          "Optional Hemkund Sahib visit",
        ],
      },

      {
        title: "What's Included",
        points: [
          "Accommodation during trek",
          "Meals during trekking days",
          "Certified trek leaders",
          "Forest permits & entry fees",
        ],
      },

      {
        title: "Not Included",
        points: [
          "Transport to base camp",
          "Personal expenses",
          "Travel insurance",
          "Offloading charges",
        ],
      },
    ],

    itinerary: [
      {
        day: "Day 1",

        title: "Rishikesh to Govindghat",

        description:
          "Begin the journey from Rishikesh early in the morning and drive through Devprayag, Rudraprayag, Karnaprayag, and Joshimath before reaching Govindghat. The route follows the Alaknanda River and offers beautiful Himalayan landscapes throughout the day.",

        distance: "270 km Drive",

        duration: "10-12 Hours",

        altitude: "6,000 ft",
      },

      {
        day: "Day 2",

        title: "Govindghat → Pulna → Ghangharia",

        description:
          "Drive from Govindghat to Pulna village and begin the trek towards Ghangharia. The trail passes through forests, waterfalls, wooden bridges, and the Pushpawati River valley before reaching the trekking base village.",

        distance: "10 km Trek",

        duration: "6-7 Hours",

        altitude: "10,003 ft",
      },

      {
        day: "Day 3",

        title: "Ghangharia → Valley of Flowers → Ghangharia",

        description:
          "Trek into the Valley of Flowers National Park surrounded by alpine meadows, glaciers, streams, and rare Himalayan flowers. Spend time exploring the valley before returning to Ghangharia for the night.",

        distance: "10-12 km Trek",

        duration: "6-7 Hours",

        altitude: "11,500 ft",
      },

      {
        day: "Day 4",

        title: "Ghangharia → Hemkund Sahib → Ghangharia",

        description:
          "Ascend towards Hemkund Sahib, one of the world’s highest Gurudwaras located beside a glacial lake. The climb is steep but rewards trekkers with panoramic Himalayan views before descending back to Ghangharia.",

        distance: "12 km Trek",

        duration: "7-8 Hours",

        altitude: "14,107 ft",
      },

      {
        day: "Day 5",

        title: "Ghangharia to Govindghat",

        description:
          "Descend through forests and mountain trails back to Pulna and drive onwards to Govindghat. Enjoy a relaxed evening after completing the trekking portion of the expedition.",

        distance: "10 km Trek",

        duration: "5-6 Hours",

        altitude: "6,000 ft",
      },

      {
        day: "Day 6",

        title: "Govindghat to Rishikesh",

        description:
          "Drive back towards Rishikesh through scenic Himalayan roads and river valleys, marking the end of the Valley of Flowers expedition.",

        distance: "270 km Drive",

        duration: "10-12 Hours",

        altitude: "1,220 ft",
      },
    ],
    services: {
      transport: {
        route: "Rishikesh to Rishikesh",

        pickup: {
          location: "Natraj Chowk, Rishikesh",
          time: "06:00 AM",
        },

        dropoff: {
          location: "Natraj Chowk, Rishikesh",
          time: "07:30 PM",
        },
      },

      stay: [
        "Guesthouse accommodation during the trek",
        "Shared alpine camps at higher altitudes",
        "Clean sleeping arrangements with basic facilities",
      ],

      meals: [
        "Nutritious vegetarian meals during trekking days",
        "Breakfast, lunch, evening snacks & dinner included",
        "Hot meals prepared by experienced mountain staff",
      ],

      support: [
        "Certified trek leader",
        "Experienced local mountain guides",
        "Porter support included",
        "Basic first aid assistance",
      ],

      essentials: [
        "Forest permits included",
        "All internal trek logistics managed",
        "Small group trekking experience",
        "Safety briefings throughout the expedition",
      ],
    },
    faq: [
      {
        question: "Is the Valley of Flowers Trek beginner friendly?",

        answer:
          "Yes. The trek is considered beginner friendly for people with decent fitness levels. The trails are well-defined, but some sections involve long walking hours and gradual altitude gain.",
      },

      {
        question: "What is the best time to visit Valley of Flowers?",

        answer:
          "Mid July to Mid August is considered the best period when the valley is in full bloom with vibrant Himalayan flowers, waterfalls, and lush green landscapes.",
      },

      {
        question: "How difficult is the trek?",

        answer:
          "The trek is graded Easy to Moderate. Most trekking days involve 5–7 hours of walking on mountain trails, stone paths, and gradual ascents.",
      },

      {
        question: "What is the highest altitude reached during the trek?",

        answer:
          "The highest altitude is reached at Hemkund Sahib which sits at approximately 14,107 ft above sea level.",
      },

      {
        question: "Do I need prior trekking experience?",

        answer:
          "No prior Himalayan trekking experience is required. However, basic fitness and stamina are highly recommended for a comfortable experience.",
      },

      {
        question: "Is Hemkund Sahib included in the itinerary?",

        answer:
          "Yes. The itinerary includes an excursion to Hemkund Sahib, one of the highest Gurudwaras in the world located beside a glacial lake.",
      },

      {
        question: "What kind of accommodation is provided?",

        answer:
          "Accommodation is usually arranged in guesthouses, lodges, or alpine stays on a sharing basis depending on the trekking location and availability.",
      },

      {
        question: "Are meals included during the trek?",

        answer:
          "Yes. Nutritious vegetarian meals including breakfast, lunch, dinner, and evening snacks are provided during trekking days.",
      },

      {
        question: "How cold does it get during the trek?",

        answer:
          "Temperatures can vary between 5°C to 15°C during the trekking season, while nights in higher regions can feel significantly colder.",
      },

      {
        question: "Will there be mobile network connectivity?",

        answer:
          "Limited mobile connectivity is available in Govindghat and Ghangharia. Network signals may remain weak or unavailable in higher trekking sections.",
      },

      {
        question: "Are permits required for the trek?",

        answer:
          "Yes. Entry permits for Valley of Flowers National Park are mandatory and are generally arranged by the trekking organizers.",
      },

      {
        question: "What should I pack for the trek?",

        answer:
          "You should carry warm layers, waterproof clothing, trekking shoes, personal medication, rain protection, sunscreen, and essential toiletries.",
      },

      {
        question: "Is altitude sickness common on this trek?",

        answer:
          "The trek involves gradual altitude gain, which helps acclimatization. Mild symptoms may occur for some trekkers near Hemkund Sahib due to higher elevation.",
      },

      {
        question: "How far is the trek from Rishikesh?",

        answer:
          "The trek begins with a long mountain drive from Rishikesh to Govindghat covering approximately 270 km.",
      },

      {
        question: "Can children or older adults do this trek?",

        answer:
          "Yes, provided they are physically fit and comfortable with long walking hours in mountain terrain.",
      },

      {
        question: "Is porter support available?",

        answer:
          "Yes. Porter and guide support can be arranged or may already be included depending on the trekking package.",
      },
    ],
  },
];

// export const destinations = [
//   {
//     id: "kagbhusandi-trek",
//     name: "Kagbhusandi Trek",
//     country: "India",
//     description:
//       "Nestled in the Garhwal Himalayas, Kagbhusandi Trek offers breathtaking views, alpine meadows, and a spiritual escape into nature. It's a lesser-known gem ideal for experienced trekkers seeking solitude and serenity.",
//     imageUrl: gallery4,
//     bestTimeToVisit: "June - October",
//     attractions: [
//       "Kagbhusandi Lake",
//       "Valley of Flowers",
//       "Hemkund Sahib",
//       "Joshimath",
//     ],
//     galleryImages: [gallery1, gallery2],
//     itinerary: [
//       {
//         day: "Day 1",
//         highlight: "Arrival & Acclimatization in Joshimath",
//         description:
//           "Arrive in Joshimath, explore local temples like Narasimha Temple, and acclimate to the altitude with a peaceful evening briefing.",
//       },
//       {
//         day: "Day 2",
//         highlight: "Scenic Trek to Ghangaria",
//         description:
//           "Trek through forests and waterfalls along the Pushpawati River to reach the peaceful alpine village of Ghangaria.",
//       },
//       {
//         day: "Day 3",
//         highlight: "Spiritual Hike to Kagbhusandi Lake",
//         description:
//           "Trek to the sacred and serene Kagbhusandi Lake, known for its emerald water and mystical legends.",
//       },
//       {
//         day: "Day 4",
//         highlight: "Discover the Valley of Flowers",
//         description:
//           "Explore the UNESCO site filled with rare Himalayan flora and dreamy landscapes — nature’s true masterpiece.",
//       },
//       {
//         day: "Day 5",
//         highlight: "Descent & Departure from Joshimath",
//         description:
//           "Descend back to Govindghat and drive to Joshimath for final goodbyes and heartfelt reflections.",
//       },
//     ],
//     highlights: [
//       "6-day guided trek",
//       "Camp under the stars",
//       "All meals included",
//       "Local guide and porter",
//     ],
//     inclusions: [
//       "Accommodation in tents/lodges",
//       "All meals during the trek",
//       "Certified local guide",
//       "First aid kit",
//       "Entry and forest permits",
//     ],
//     exclusions: [
//       "Transportation to base location",
//       "Personal trekking gear",
//       "Insurance",
//       "Snacks & beverages",
//     ],
//     gallery: [gallery1, gallery2, gallery3, gallery4],
//   },

//   {
//     id: "valley-of-flowers",
//     name: "Valley of Flowers Trek",
//     country: "India",
//     description:
//       "Famed for its blooming alpine meadows, the Valley of Flowers Trek is a kaleidoscope of colors tucked away in Uttarakhand. Ideal for beginners and nature lovers alike, it's a walk through a living canvas.",
//     imageUrl: valleyImage,
//     bestTimeToVisit: "July - September",
//     attractions: [
//       "Valley of Flowers",
//       "Hemkund Sahib",
//       "Ghangaria",
//       "Govindghat",
//     ],
//     galleryImages: [gallery1, gallery2],
//     itinerary: [
//       {
//         day: "Day 1",
//         highlight: "Arrival in Joshimath",
//         description:
//           "Reach Joshimath and acclimate to the altitude. Explore the town or relax in nature's lap before the trek begins.",
//       },
//       {
//         day: "Day 2",
//         highlight: "Joshimath to Ghangaria",
//         description:
//           "Drive to Govindghat and start the moderate trek to Ghangaria through lush valleys and charming trails.",
//       },
//       {
//         day: "Day 3",
//         highlight: "Explore the Valley of Flowers",
//         description:
//           "Witness a burst of colors in the Valley of Flowers — home to rare Himalayan blooms and fluttering butterflies.",
//       },
//       {
//         day: "Day 4",
//         highlight: "Visit Hemkund Sahib",
//         description:
//           "Climb to the sacred Hemkund Sahib Gurudwara set beside a glacial lake, and return to Ghangaria by evening.",
//       },
//       {
//         day: "Day 5",
//         highlight: "Return to Joshimath",
//         description:
//           "Descend back to Govindghat and drive to Joshimath. Celebrate the trek’s end with your fellow adventurers.",
//       },
//     ],
//     highlights: [
//       "Beginner-friendly trek",
//       "UNESCO World Heritage Site",
//       "Floral diversity",
//       "Spiritual and scenic experience",
//     ],
//     inclusions: [
//       "Stay in guesthouses/lodges",
//       "Meals during the trek",
//       "Experienced guide",
//       "Permits and entry tickets",
//       "First aid support",
//     ],
//     exclusions: [
//       "Transport to Joshimath",
//       "Porter charges",
//       "Personal gear",
//       "Tips and gratuities",
//     ],
//     gallery: [gallery2, gallery3, gallery5],
//   },

//   {
//     id: "satopanth-tal",
//     name: "Satopanth Tal Trek",
//     country: "India",
//     description:
//       "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
//     imageUrl: satopanth2,
//     bestTimeToVisit: "May - October",
//     attractions: [
//       "Satopanth Lake",
//       "Chaukhamba Peaks",
//       "Mana Village",
//       "Vasundhara Falls",
//     ],
//     galleryImages: [satopanth1],
//     itinerary: [
//       {
//         day: "Day 1",
//         highlight: "Arrival in Badrinath",
//         description:
//           "Arrive at the sacred town of Badrinath. Acclimate and explore the ancient temple and local surroundings.",
//       },
//       {
//         day: "Day 2",
//         highlight: "Trek to Laxmi Van",
//         description:
//           "Begin your trek with a scenic walk to Laxmi Van, a campsite nestled among birch and pine forests.",
//       },
//       {
//         day: "Day 3",
//         highlight: "Trek to Chakratirtha",
//         description:
//           "Continue climbing through rocky terrain to reach Chakratirtha, a beautiful high-altitude meadow with views of Chaukhamba.",
//       },
//       {
//         day: "Day 4",
//         highlight: "Visit Satopanth Tal",
//         description:
//           "Reach the sacred Satopanth Tal, believed to be the path to heaven. Surrounded by ice-capped peaks, it's a spiritual paradise.",
//       },
//       {
//         day: "Day 5",
//         highlight: "Descent to Badrinath",
//         description:
//           "Retrace your steps to Badrinath and conclude the journey with blessings and breathtaking memories.",
//       },
//     ],
//     highlights: [
//       "Glacial alpine lake",
//       "Remote & spiritual trail",
//       "Trek near India's last village",
//       "Panoramic views of Himalayan peaks",
//     ],
//     inclusions: [
//       "Accommodation in tents",
//       "All meals on the trek",
//       "Expert trek leaders",
//       "Porters and support staff",
//       "Forest permits",
//     ],
//     exclusions: [
//       "Transport to Badrinath",
//       "Meals in base town",
//       "Trekking equipment",
//       "Insurance & medical expenses",
//     ],
//     gallery: [gallery1,],
//   },
//   {
//     id: "badrinath",
//     name: "Satopanth Tal Trek",
//     country: "India",
//     description:
//       "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
//     imageUrl: satopanth2,
//     bestTimeToVisit: "May - October",
//     attractions: [
//       "Satopanth Lake",
//       "Chaukhamba Peaks",
//       "Mana Village",
//       "Vasundhara Falls",
//     ],
//     galleryImages: [satopanth1, satopanth2, satopanth, gallery6],
//     itinerary: [
//       {
//         day: "Day 1",
//         highlight: "Arrival in Badrinath",
//         description:
//           "Arrive at the sacred town of Badrinath. Acclimate and explore the ancient temple and local surroundings.",
//       },
//       {
//         day: "Day 2",
//         highlight: "Trek to Laxmi Van",
//         description:
//           "Begin your trek with a scenic walk to Laxmi Van, a campsite nestled among birch and pine forests.",
//       },
//       {
//         day: "Day 3",
//         highlight: "Trek to Chakratirtha",
//         description:
//           "Continue climbing through rocky terrain to reach Chakratirtha, a beautiful high-altitude meadow with views of Chaukhamba.",
//       },
//       {
//         day: "Day 4",
//         highlight: "Visit Satopanth Tal",
//         description:
//           "Reach the sacred Satopanth Tal, believed to be the path to heaven. Surrounded by ice-capped peaks, it's a spiritual paradise.",
//       },
//       {
//         day: "Day 5",
//         highlight: "Descent to Badrinath",
//         description:
//           "Retrace your steps to Badrinath and conclude the journey with blessings and breathtaking memories.",
//       },
//     ],
//     highlights: [
//       "Glacial alpine lake",
//       "Remote & spiritual trail",
//       "Trek near India's last village",
//       "Panoramic views of Himalayan peaks",
//     ],
//     inclusions: [
//       "Accommodation in tents",
//       "All meals on the trek",
//       "Expert trek leaders",
//       "Porters and support staff",
//       "Forest permits",
//     ],
//     exclusions: [
//       "Transport to Badrinath",
//       "Meals in base town",
//       "Trekking equipment",
//       "Insurance & medical expenses",
//     ],
//     gallery: [gallery1, gallery4, gallery5, gallery6],
//   },
//   {
//     id: "lord-curzon-trail",
//     name: "Lord Curzon Trail (Kuari Pass Trek)",
//     country: "India",
//     description:
//       "A legendary Himalayan trek named after Lord Curzon, this trail offers stunning views of the Nanda Devi range, oak forests, and charming Himalayan villages. Ideal for those seeking culture, serenity, and panoramic peaks.",
//     imageUrl: gallery2,
//     bestTimeToVisit: "March - June & September - November",
//     attractions: [
//       "Kuari Pass",
//       "Nanda Devi Views",
//       "Auli Meadows",
//       "Tali Forest Camp",
//     ],
//     galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
//     itinerary: [
//       {
//         day: "Day 1",
//         highlight: "Arrival in Joshimath",
//         description:
//           "Arrive in the town of Joshimath. Spend the evening exploring the local market and temples, while acclimatizing to the altitude.",
//       },
//       {
//         day: "Day 2",
//         highlight: "Drive to Dhak & Trek to Gulling",
//         description:
//           "Drive to Dhak village and begin the trek through charming Himalayan villages and terraced farms to reach Gulling.",
//       },
//       {
//         day: "Day 3",
//         highlight: "Trek to Tali Forest Camp",
//         description:
//           "Pass through enchanting oak and rhododendron forests. Set camp in the tranquil Tali Forest, surrounded by alpine magic.",
//       },
//       {
//         day: "Day 4",
//         highlight: "Trek to Kuari Pass via Khullara",
//         description:
//           "Ascend to Kuari Pass for spectacular views of Nanda Devi, Dronagiri, and Hathi Parbat. A highlight of the journey.",
//       },
//       {
//         day: "Day 5",
//         highlight: "Return to Joshimath",
//         description:
//           "Descend back through the same trail and drive to Joshimath, concluding the scenic and historic trek.",
//       },
//     ],
//     highlights: [
//       "Views of Nanda Devi & Dronagiri",
//       "Forest and alpine camping",
//       "Beginner-friendly Himalayan trek",
//       "Legendary British-era route",
//     ],
//     inclusions: [
//       "Tented accommodation",
//       "All meals on trek",
//       "Local guide and trek leader",
//       "Porters and support staff",
//       "Permits & camping gear",
//     ],
//     exclusions: [
//       "Transport to Joshimath",
//       "Personal trekking gear",
//       "Hotel stay in base town",
//       "Insurance & personal expenses",
//     ],
//     gallery: [gallery2, gallery3],
//   }
// ];

export const topDestinations = [
  {
    id: "badrinath",
    name: "Badrinath Dham",
    image: badrinath,
    images: [badrinath, badrinath2, gallery3],
    description:
      "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
    price: "5,500",
  },
  {
    id: "kagbhusandi-trek",
    name: "Kagbhusandi",
    image: gallery4,
    images: [gallery4, gallery1, gallery2, gallery3],
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
  {
    id: "valley-of-flowers",
    name: "Valley Of Flowers",
    image: valleyImage,
    images: [valleyImage, valley2, gallery6],
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "9,500",
  },
  {
    id: "satopanth-tal",
    name: "Satopanth Tal Trek",
    image: satopanth,
    images: [satopanth, gallery2, gallery3],
    description:
      "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
    price: "14,500",
  },
];

export const uttarakhand = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "9,500",
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass",
    image: kuariImage,
    description:
      "Known as the 'Curzon Trail', this trek offers majestic views of the Garhwal Himalayas, including Nanda Devi.",
    price: "8,000",
  },
];
