import hero2Day from "../../assets/images/auli-skiing/2day.jpeg";
import hero3Day from "../../assets/images/auli-skiing/3day.jpeg";
import hero7Day from "../../assets/images/auli-skiing/7day.jpeg";

const courseData = {
  "2day": {
    title: "4-Day Snow Experience",
    price: "₹14,999",
    duration: "2 Days Travel + 2 Days Ski Training",
    image: hero2Day,
    description:
      "Ideal first snow experience with guided ski training, travel support, equipment and accommodation included.",
    itinerary: [
      "Day 1 — Travel to Auli & orientation",
      "Day 2 — Beginner ski training",
      "Day 3 — Full-day ski practice",
      "Day 4 — Return journey",
    ],
  },

  "3day": {
    title: "5-Day Skill Builder Experience",
    price: "₹19,999",
    duration: "2 Days Travel + 3 Days Ski Training",
    image: hero3Day,
    description:
      "Extended ski learning experience combining travel comfort, structured coaching and real slope exposure.",
    itinerary: [
      "Day 1 — Travel & orientation",
      "Day 2 — Basics and balance training",
      "Day 3 — Turning techniques & slope practice",
      "Day 4 — Advanced guided runs",
      "Day 5 — Return journey",
    ],
  },

  "7day": {
    title: "7-Day Professional Ski Program",
    price: "₹30,000",
    duration: "Professional Multi-Day Ski Training",
    image: hero7Day,
    description:
      "Comprehensive ski progression program designed for serious learners aiming for strong technique and certification.",
    itinerary: [
      "Arrival, safety training & equipment fitting",
      "Balance and braking drills",
      "Turning techniques & slope control",
      "Chairlift training",
      "Terrain exploration",
      "Freestyle introduction",
      "Final evaluation & certification",
    ],
  },
};



const packages = [
  {
    id: "2day",
    name: "4 Day Experience",
    title: "2 Days Travel + 2 Full Days Ski Training",
    price: "₹14,999",
    image: hero2Day,
  },
  {
    id: "3day",
    name: "5 Day Experience",
    title: "2 Days Travel + 3 Full Days Ski Training",
    price: "₹19,999",
    image: hero3Day,
  },
  {
    id: "7day",
    name: "7 Day Professional Program",
    title: "Advanced ski progression with certification",
    price: "₹30,000",
    featured: true,
    image: hero7Day,
  },
];

export {courseData, packages}