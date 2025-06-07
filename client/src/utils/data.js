import gallery1 from "../assets/images/trip1.jpeg";
import gallery2 from "../assets/images/trip2.jpeg";
import gallery3 from "../assets/images/trip3.jpeg";
import gallery4 from "../assets/images/kagbhusandi.jpeg";
import gallery5 from "../assets/images/hero3.jpeg";
import gallery6 from "../assets/images/trip.jpeg";

import satopanth from "../assets/images/satopanth.jpeg";
import valleyImage from "../assets/images/valleyImage.jpeg";
import roopkundImage from "../assets/images/roopkundImage.jpeg";
import pindariImage from "../assets/images/pindariImage.jpeg";
import harkidunImage from "../assets/images/harkidunImage.jpeg";
import kuariImage from "../assets/images/trip2.jpeg";

import satopanth1 from "../assets/images/satopanth1.jpeg";
import satopanth2 from "../assets/images/satopanth2.jpeg";

export const destinations = [
  {
    id: "kagbhusandi-trek",
    name: "Kagbhusandi Trek",
    country: "India",
    description:
      "Nestled in the Garhwal Himalayas, Kagbhusandi Trek offers breathtaking views, alpine meadows, and a spiritual escape into nature. It's a lesser-known gem ideal for experienced trekkers seeking solitude and serenity.",
    imageUrl: gallery4,
    bestTimeToVisit: "June - October",
    attractions: [
      "Kagbhusandi Lake",
      "Valley of Flowers",
      "Hemkund Sahib",
      "Joshimath",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival & Acclimatization in Joshimath",
        description:
          "Arrive in Joshimath, explore local temples like Narasimha Temple, and acclimate to the altitude with a peaceful evening briefing.",
      },
      {
        day: "Day 2",
        highlight: "Scenic Trek to Ghangaria",
        description:
          "Trek through forests and waterfalls along the Pushpawati River to reach the peaceful alpine village of Ghangaria.",
      },
      {
        day: "Day 3",
        highlight: "Spiritual Hike to Kagbhusandi Lake",
        description:
          "Trek to the sacred and serene Kagbhusandi Lake, known for its emerald water and mystical legends.",
      },
      {
        day: "Day 4",
        highlight: "Discover the Valley of Flowers",
        description:
          "Explore the UNESCO site filled with rare Himalayan flora and dreamy landscapes — nature’s true masterpiece.",
      },
      {
        day: "Day 5",
        highlight: "Descent & Departure from Joshimath",
        description:
          "Descend back to Govindghat and drive to Joshimath for final goodbyes and heartfelt reflections.",
      },
    ],
    highlights: [
      "6-day guided trek",
      "Camp under the stars",
      "All meals included",
      "Local guide and porter",
    ],
    inclusions: [
      "Accommodation in tents/lodges",
      "All meals during the trek",
      "Certified local guide",
      "First aid kit",
      "Entry and forest permits",
    ],
    exclusions: [
      "Transportation to base location",
      "Personal trekking gear",
      "Insurance",
      "Snacks & beverages",
    ],
    gallery: [gallery1, gallery2, gallery3, gallery4],
  },

  {
    id: "valley-of-flowers",
    name: "Valley of Flowers Trek",
    country: "India",
    description:
      "Famed for its blooming alpine meadows, the Valley of Flowers Trek is a kaleidoscope of colors tucked away in Uttarakhand. Ideal for beginners and nature lovers alike, it's a walk through a living canvas.",
    imageUrl: valleyImage,
    bestTimeToVisit: "July - September",
    attractions: [
      "Valley of Flowers",
      "Hemkund Sahib",
      "Ghangaria",
      "Govindghat",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival in Joshimath",
        description:
          "Reach Joshimath and acclimate to the altitude. Explore the town or relax in nature's lap before the trek begins.",
      },
      {
        day: "Day 2",
        highlight: "Joshimath to Ghangaria",
        description:
          "Drive to Govindghat and start the moderate trek to Ghangaria through lush valleys and charming trails.",
      },
      {
        day: "Day 3",
        highlight: "Explore the Valley of Flowers",
        description:
          "Witness a burst of colors in the Valley of Flowers — home to rare Himalayan blooms and fluttering butterflies.",
      },
      {
        day: "Day 4",
        highlight: "Visit Hemkund Sahib",
        description:
          "Climb to the sacred Hemkund Sahib Gurudwara set beside a glacial lake, and return to Ghangaria by evening.",
      },
      {
        day: "Day 5",
        highlight: "Return to Joshimath",
        description:
          "Descend back to Govindghat and drive to Joshimath. Celebrate the trek’s end with your fellow adventurers.",
      },
    ],
    highlights: [
      "Beginner-friendly trek",
      "UNESCO World Heritage Site",
      "Floral diversity",
      "Spiritual and scenic experience",
    ],
    inclusions: [
      "Stay in guesthouses/lodges",
      "Meals during the trek",
      "Experienced guide",
      "Permits and entry tickets",
      "First aid support",
    ],
    exclusions: [
      "Transport to Joshimath",
      "Porter charges",
      "Personal gear",
      "Tips and gratuities",
    ],
    gallery: [gallery2, gallery3, gallery5],
  },

  {
    id: "satopanth-tal",
    name: "Satopanth Tal Trek",
    country: "India",
    description:
      "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
    imageUrl: satopanth2,
    bestTimeToVisit: "May - October",
    attractions: [
      "Satopanth Lake",
      "Chaukhamba Peaks",
      "Mana Village",
      "Vasundhara Falls",
    ],
    galleryImages: [satopanth1, satopanth2, satopanth, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival in Badrinath",
        description:
          "Arrive at the sacred town of Badrinath. Acclimate and explore the ancient temple and local surroundings.",
      },
      {
        day: "Day 2",
        highlight: "Trek to Laxmi Van",
        description:
          "Begin your trek with a scenic walk to Laxmi Van, a campsite nestled among birch and pine forests.",
      },
      {
        day: "Day 3",
        highlight: "Trek to Chakratirtha",
        description:
          "Continue climbing through rocky terrain to reach Chakratirtha, a beautiful high-altitude meadow with views of Chaukhamba.",
      },
      {
        day: "Day 4",
        highlight: "Visit Satopanth Tal",
        description:
          "Reach the sacred Satopanth Tal, believed to be the path to heaven. Surrounded by ice-capped peaks, it's a spiritual paradise.",
      },
      {
        day: "Day 5",
        highlight: "Descent to Badrinath",
        description:
          "Retrace your steps to Badrinath and conclude the journey with blessings and breathtaking memories.",
      },
    ],
    highlights: [
      "Glacial alpine lake",
      "Remote & spiritual trail",
      "Trek near India's last village",
      "Panoramic views of Himalayan peaks",
    ],
    inclusions: [
      "Accommodation in tents",
      "All meals on the trek",
      "Expert trek leaders",
      "Porters and support staff",
      "Forest permits",
    ],
    exclusions: [
      "Transport to Badrinath",
      "Meals in base town",
      "Trekking equipment",
      "Insurance & medical expenses",
    ],
    gallery: [gallery1, gallery4, gallery5, gallery6],
  },
  {
    id: "lord-curzon-trail",
    name: "Lord Curzon Trail (Kuari Pass Trek)",
    country: "India",
    description:
      "A legendary Himalayan trek named after Lord Curzon, this trail offers stunning views of the Nanda Devi range, oak forests, and charming Himalayan villages. Ideal for those seeking culture, serenity, and panoramic peaks.",
    imageUrl: gallery2,
    bestTimeToVisit: "March - June & September - November",
    attractions: [
      "Kuari Pass",
      "Nanda Devi Views",
      "Auli Meadows",
      "Tali Forest Camp",
    ],
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Arrival in Joshimath",
        description:
          "Arrive in the town of Joshimath. Spend the evening exploring the local market and temples, while acclimatizing to the altitude.",
      },
      {
        day: "Day 2",
        highlight: "Drive to Dhak & Trek to Gulling",
        description:
          "Drive to Dhak village and begin the trek through charming Himalayan villages and terraced farms to reach Gulling.",
      },
      {
        day: "Day 3",
        highlight: "Trek to Tali Forest Camp",
        description:
          "Pass through enchanting oak and rhododendron forests. Set camp in the tranquil Tali Forest, surrounded by alpine magic.",
      },
      {
        day: "Day 4",
        highlight: "Trek to Kuari Pass via Khullara",
        description:
          "Ascend to Kuari Pass for spectacular views of Nanda Devi, Dronagiri, and Hathi Parbat. A highlight of the journey.",
      },
      {
        day: "Day 5",
        highlight: "Return to Joshimath",
        description:
          "Descend back through the same trail and drive to Joshimath, concluding the scenic and historic trek.",
      },
    ],
    highlights: [
      "Views of Nanda Devi & Dronagiri",
      "Forest and alpine camping",
      "Beginner-friendly Himalayan trek",
      "Legendary British-era route",
    ],
    inclusions: [
      "Tented accommodation",
      "All meals on trek",
      "Local guide and trek leader",
      "Porters and support staff",
      "Permits & camping gear",
    ],
    exclusions: [
      "Transport to Joshimath",
      "Personal trekking gear",
      "Hotel stay in base town",
      "Insurance & personal expenses",
    ],
    gallery: [gallery2, gallery3, gallery5, gallery6],
  },
  {
    id: "hampta-pass",
    name: "Hampta Pass Trek",
    country: "India",
    description:
      "The Hampta Pass trek connects the lush Kullu valley to the stark Lahaul valley. With dramatic landscape shifts, river crossings, and high-altitude camps, it’s one of Himachal's most adventurous trails.",
    imageUrl: gallery3,
    bestTimeToVisit: "June - September",
    attractions: [
      "Hampta Pass",
      "Chandratal Lake",
      "Jobra Campsite",
      "Balu Ka Ghera",
    ],
    galleryImages: [gallery1, gallery3, gallery4, gallery5, gallery6],
    itinerary: [
      {
        day: "Day 1",
        highlight: "Drive from Manali to Jobra & Trek to Chika",
        description:
          "Drive from Manali to Jobra. Begin your trek through forests and meadows to Chika, the first campsite.",
      },
      {
        day: "Day 2",
        highlight: "Trek to Balu Ka Ghera",
        description:
          "Ascend alongside the Rani River, with views of snow-capped mountains. Camp near the riverbed surrounded by mountains.",
      },
      {
        day: "Day 3",
        highlight: "Cross Hampta Pass to Shea Goru",
        description:
          "The most thrilling day — cross Hampta Pass at 14,000+ ft. View snow fields and descend to Shea Goru in the Lahaul valley.",
      },
      {
        day: "Day 4",
        highlight: "Trek to Chhatru & Drive to Chandratal (if road is open)",
        description:
          "Trek through riverbeds to Chhatru. If weather allows, drive to the moon-like Chandratal Lake — a surreal high-altitude lake.",
      },
      {
        day: "Day 5",
        highlight: "Drive back to Manali",
        description:
          "After breakfast, drive back to Manali through the famous Rohtang Pass and conclude your incredible journey.",
      },
    ],
    highlights: [
      "Crossover between Kullu & Lahaul valleys",
      "Dramatic landscapes and river crossings",
      "Optional Chandratal Lake excursion",
      "Perfect mix of adventure and beauty",
    ],
    inclusions: [
      "Accommodation in tents",
      "All trek meals",
      "Experienced trek leaders",
      "Camping gear and permits",
      "Transport from Manali (shared)",
    ],
    exclusions: [
      "Hotel in Manali",
      "Personal trekking gear",
      "Meals in Manali",
      "Travel insurance",
    ],
    gallery: [gallery1, gallery3, gallery5, gallery6],
  },
];

export const topDestinations = [
  {
    id: "kagbhusandi-trek",
    name: "Kagbhusandi",
    image: gallery4,
    description: "A tropical paradise with beautiful beaches and rich culture.",
    price: "12,000",
  },
  {
    id: "valley-of-flowers",
    name: "Valley Of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "9,500",
  },
  {
    id: "satopanth-tal",
    name: "Satopanth Tal Trek",
    image: satopanth,
    description:
      "Satopanth Tal is a high-altitude glacial lake surrounded by towering Himalayan peaks. Known for its spiritual aura and pristine beauty, this trek is both physically challenging and soulfully rewarding.",
    price: "14,500",
  },
];

export const uttarakhand = [
  {
    id: "har-ki-dun",
    name: "Har Ki Dun",
    image: harkidunImage,
    description:
      "A cradle-shaped valley trek through ancient villages and forests, rich in local culture and scenic beauty.",
    price: "8,800",
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: valleyImage,
    description:
      "A UNESCO World Heritage site, this trek offers a burst of colorful alpine flowers nestled in the Himalayas.",
    price: "9,500",
  },
  {
    id: "roopkund-trek",
    name: "Roopkund Trek",
    image: roopkundImage,
    description:
      "A mysterious glacial lake trek known for its human skeletons and dramatic views of Trishul and Nanda Ghunti peaks.",
    price: "9,200",
  },
  {
    id: "pindari-glacier",
    name: "Pindari Glacier",
    image: pindariImage,
    description:
      "A beginner-friendly glacier trek in the Kumaon region with spectacular views of Nanda Devi and other peaks.",
    price: "7,000",
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
