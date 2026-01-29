import { Helmet } from "react-helmet";
import Hero from "../components/Home/Hero";
import Himachal from "../components/Home/Himanchal";
import TopPics from "../components/Home/TopPics";
import Uttrakhand from "../components/Home/Uttrakhand";
import AuliEventsPreview from "../components/Home/AuliEventsPreview";

export default function Home() {
  return (
    <div className="bg-white">
      {/* SEO */}
      <Helmet>
        <title>WhatNext Online | Himalayan Treks, Winter Trips & Events</title>

        <meta
          name="description"
          content="WhatNext Online offers curated Himalayan treks, winter adventures, Auli DJ Night packages, and unforgettable travel experiences across Uttarakhand & Himachal. Book your next journey with trusted experts."
        />

        <meta
          name="keywords"
          content="Himalayan treks, Auli New Year, Auli Christmas, Uttarakhand treks, Himachal treks, adventure travel India, snow trips, winter adventures, WhatNext Online"
        />

        <link rel="canonical" href="https://www.whatnextonline.in/" />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WhatNext Online | Curated Himalayan Adventures"
        />
        <meta
          property="og:description"
          content="Join WhatNext Online for treks, winter trips, skiing courses, and Auli music events. Trusted, curated and adventure-ready."
        />
        <meta
          property="og:image"
          content="https://www.whatnextonline.in/static/whatnext-og-banner.jpg"
        />
        <meta property="og:url" content="https://www.whatnextonline.in/" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WhatNext Online",
            url: "https://www.whatnextonline.in",
            logo: "https://www.whatnextonline.in/static/whatnext-logo.png",
            sameAs: [
              "https://instagram.com/whatnextonline",
              "https://facebook.com/whatnextonline",
            ],
            description:
              "WhatNext Online curates Himalayan treks, winter adventures, skiing courses, and Auli Christmas & New Year events.",
          })}
        </script>

        {/* FAQ Schema (Optional but powerful) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does WhatNext Online offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer curated treks, winter adventures, skiing experiences, and Auli Christmas & New Year DJ events.",
                },
              },
              {
                "@type": "Question",
                name: "Is WhatNext Online suitable for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Many of our treks and winter trips are beginner-friendly with expert support.",
                },
              },
              {
                "@type": "Question",
                name: "Do you organize trips to Auli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we organize winter trips, snow adventures, and seasonal DJ night events in Auli.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <h1 className="sr-only">
        Himalayan Treks, Winter Trips & Auli Events by WhatNext Online
      </h1>

      <Hero />
      {/* <AuliEventsPreview /> */}
      <TopPics />
      <Uttrakhand />
      <Himachal />
    </div>
  );
}
