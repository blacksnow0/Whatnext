import { valleyGallery } from "./galleries/valleyGallery";
import { satopanthGallery } from "./galleries/satopanthGallery";
import { kagbhusandiGallery } from "./galleries/kagbhusandiGallery";

/* THUMBNAILS */
import tulip_valley_of_flower from "../assets/images/valley-of-flower/tulip_valley_of_flowers.webp";
import satopanth from "../assets/images/satopanth/satopanthCamp.webp";
import kagbhusandi from "../assets/images/kagbhusandi/kagbhusandi.webp";

export const topDestinations = [

  {
    id: "valley-of-flowers",

    name: "Valley Of Flowers",

    image: tulip_valley_of_flower,

    gallery: valleyGallery,

    description:
      "A UNESCO World Heritage trek filled with blooming alpine flowers, waterfalls, misty valleys, and breathtaking Himalayan landscapes.",

    price: "₹13,499",

    accent: "from-orange-900/70 to-transparent",
  },

  {
    id: "kagbhusandi-trek",

    name: "Kagbhusandi Tal",

    image: kagbhusandi,

    gallery: kagbhusandiGallery,

    description:
      "A remote Himalayan expedition through alpine meadows, glaciers, waterfalls, and the sacred Kagbhusandi Tal.",

    price: "₹24,999",

    accent: "from-zinc-900/80 to-transparent",
  },

  {
    id: "satopanth-tal",

    name: "Satopanth Tal",

    image: satopanth,

    gallery: satopanthGallery,

    description:
      "A spiritually significant glacial lake trek surrounded by towering Himalayan peaks and dramatic high-altitude terrain.",

    price: "₹23,499",

    accent: "from-black/80 to-transparent",
  },
];