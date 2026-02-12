import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookingSection from "../components/helper/BookingComponent";



import {courseData} from "../utils/data/auliCourses"




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

      <section className="py-12 bg-gray-50">
  <div className="max-w-5xl mx-auto px-5">

    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      Inclusions
    </h2>

    <ul className="space-y-2 text-gray-700 list-disc pl-5">
      <li>Round-trip transport from Rishikesh to Auli</li>
      <li>Accommodation on sharing basis</li>
      <li>All meals (Breakfast, Lunch & Dinner)</li>
      <li>Certified ski instructor training sessions</li>
      <li>Ski equipment rental (Skis, boots, poles / snowboard)</li>
      <li>Chairlift pass during training hours</li>
      <li>Access to beginner/intermediate slopes</li>
      <li>Safety briefing & first-aid support</li>
      <li>Program completion certificate (where applicable)</li>
      <li>On-ground trip coordinator support</li>
    </ul>

  </div>
</section>


<section className="py-12">
  <div className="max-w-5xl mx-auto px-5">

    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      Exclusions
    </h2>

    <ul className="space-y-2 text-gray-700 list-disc pl-5">
      <li>Travel to Rishikesh pickup location</li>
      <li>Personal expenses (shopping, snacks, laundry)</li>
      <li>Medical or emergency evacuation costs</li>
      <li>Personal travel/adventure insurance</li>
      <li>Heater charges at hotels (if applicable)</li>
      <li>Porter or mule charges for luggage</li>
      <li>Extra chairlift rides beyond training</li>
      <li>Private coaching sessions</li>
      <li>Equipment damage due to negligence</li>
      <li>Costs due to weather/road disruptions</li>
    </ul>

  </div>
</section>


    </div>
  );
}
