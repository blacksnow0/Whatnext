import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookingSection from "../components/helper/BookingComponent";

import hero2Day from "../assets/images/auli-skiing/2day.jpeg";
import hero3Day from "../assets/images/auli-skiing/3day.jpeg";
import hero4Day from "../assets/images/auli-skiing/4day.jpeg";
import hero7Day from "../assets/images/auli-skiing/7day.jpeg";;



/* ================= COURSE DATA ================= */

const courseData = {
  "2day": {
    title: "2-Day Beginner Snow Experience",
    price: "₹9,999",
    duration: "2 Days",
    image: hero2Day,
    description:
      "Perfect for first-time skiers who want to experience snow sports safely and confidently.",
    itinerary: [
      "Arrival, orientation & equipment fitting",
      "Balance training and beginner slope runs",
    ],
  },

  "3day": {
    title: "3-Day Snow Adventure Program",
    price: "₹14,999",
    duration: "3 Days",
    image: hero3Day,
    description:
      "Adventure-focused program designed for thrill-seekers who want guided slope experiences.",
    itinerary: [
      "Snow basics and equipment handling",
      "Turning techniques and slope confidence",
      "Guided adventure runs",
    ],
  },

  "4day": {
    title: "4-Day Skill Builder Course",
    price: "₹19,999",
    duration: "4 Days",
    image: hero4Day,
    description:
      "Fast-track skiing program focused on skill improvement and independent slope control.",
    itinerary: [
      "Snowplough braking and balance control",
      "Turning mastery drills",
      "Chairlift training",
      "Independent slope practice",
    ],
  },

  "7day": {
    title: "7-Day Professional Ski Program",
    price: "₹30,000",
    duration: "7 Days",
    image: hero7Day,
    description:
      "Complete professional ski foundation program designed to build confident and advanced skiers.",
    itinerary: [
      "Orientation and safety training",
      "Balance and braking drills",
      "Turning techniques",
      "Chairlift training",
      "Terrain exploration",
      "Freestyle introduction",
      "Final evaluation and certification",
    ],
  },
};


export default function AuliCourseDetails() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold">Course Not Found</h2>
        <Link
          to="/winter-sports"
          className="mt-4 text-brand font-semibold"
        >
          Back to All Courses →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= SEO ================= */}

      <Helmet>
        <title>{course.title} | Ski Courses in Auli</title>
        <meta
          name="description"
          content={`${course.title} in Auli. ${course.duration} professional skiing program with certified instructors and full equipment support.`}
        />
      </Helmet>

      {/* ================= HERO ================= */}

      <section
        className="relative h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${course.image})` }}

      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 pb-10 text-white">

          <Link
            to="/winter-sports"
            className="text-sm text-white/80"
          >
            ← Back to All Programs
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            {course.title}
          </h1>

          <p className="mt-3 text-lg text-white font-bold">
            {course.price} · {course.duration}
          </p>

          <p className="mt-3 max-w-2xl text-white/90">
            {course.description}
          </p>

        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 grid gap-6 md:grid-cols-3 text-center">

          {[
            "Certified Instructors",
            "All Equipment Included",
            "Small Training Groups",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl py-6 shadow-sm"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ITINERARY ================= */}

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-5">

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Program Structure
          </h2>

          <div className="space-y-4 border-l-2 border-brand pl-4">

            {course.itinerary.map((step, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[10px] top-2 w-2 h-2 bg-brand rounded-full" />
                <p className="text-gray-700">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= BOOKING ================= */}

      <section id="booking" className="py-16 bg-gray-50">
        <BookingSection />
      </section>

    </div>
  );
}
