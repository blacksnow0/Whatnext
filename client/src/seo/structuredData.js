export const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "WhatNext Online",

  url: "https://www.whatnextonline.in",

  logo: "https://www.whatnextonline.in/logo.png",

  sameAs: ["https://www.instagram.com/whatnextonline/"],
};

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (destination) => ({
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: "https://www.whatnextonline.in",
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "Destinations",

      item: "https://www.whatnextonline.in/destinations",
    },

    {
      "@type": "ListItem",

      position: 3,

      name: destination.name,

      item: destination.seo.canonical,
    },
  ],
});

export const generateTourSchema = (destination) => ({
  "@context": "https://schema.org",

  "@type": "TouristTrip",

  name: destination.name,

  description: destination.seo.description,

  image: destination.seo.image,

  touristType: destination.difficulty,

  itinerary: {
    "@type": "ItemList",

    numberOfItems: destination.itinerary.length,
  },

  provider: {
    "@type": "Organization",

    name: "WhatNext Online",
  },
});
