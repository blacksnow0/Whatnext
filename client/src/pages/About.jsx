export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#121212]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#efe2d2] to-transparent opacity-70" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff6b00]">
              About WhatNext Online
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Himalayan journeys built for people who want more than just a trip.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
              WhatNext Online creates carefully designed trekking experiences across the Himalayas with a strong focus on safety, storytelling, local expertise and unforgettable mountain moments.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6b00]">
              Our Story
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Created from a passion for mountains, people and meaningful travel.
            </h2>
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-neutral-600">
            <p>
              WhatNext Online began with a simple vision — to make Himalayan trekking feel more personal, immersive and trustworthy. Instead of rushed itineraries and overcrowded experiences, we focus on curated journeys that balance adventure with comfort and preparation.
            </p>

            <p>
              From iconic treks to hidden alpine routes, every expedition is planned with local insights, experienced trek leaders and carefully selected logistics to ensure a smooth experience from start to finish.
            </p>

            <p>
              Whether you are a first-time trekker or a seasoned explorer, our goal is to help you experience the mountains with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Curated Himalayan Treks',
              value: '20+',
            },
            {
              title: 'Expert Expedition Planning',
              value: '100%',
            },
            {
              title: 'Support Throughout Journey',
              value: '24/7',
            },
            {
              title: 'Focus On Safety & Experience',
              value: 'Top Priority',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                {item.value}
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6b00]">
              What We Believe
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Experiences should feel safe, inspiring and unforgettable.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Safety First',
                text: 'Careful planning, responsible itineraries and experienced coordination remain at the center of every trek.',
              },
              {
                title: 'Authentic Exploration',
                text: 'We believe the best journeys come from meaningful local experiences and genuine mountain culture.',
              },
              {
                title: 'Small Details Matter',
                text: 'Preparation, communication and smooth logistics create a better overall trekking experience.',
              },
              {
                title: 'Responsible Travel',
                text: 'We encourage eco-conscious travel practices and respect for local communities and landscapes.',
              },
              {
                title: 'Community Driven',
                text: 'Trekking is not just about reaching summits — it is about the people you meet along the way.',
              },
              {
                title: 'Designed For Modern Travelers',
                text: 'Clear information, responsive support and modern planning tools make the experience stress-free.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-black/5 bg-[#f8f5f1] p-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section
        id="policies"
        className="bg-[#f8f5f1] px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6b00]">
              Policies & Information
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Important details before your expedition.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div
              id="cancellation-policy"
              className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                Cancellation Policy
              </h3>

              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-600">
                <li>
                  • Cancellations made 30+ days before departure may receive partial refunds after deduction of processing charges.
                </li>

                <li>
                  • Cancellations within 15–30 days may receive limited refunds depending on bookings and logistics already confirmed.
                </li>

                <li>
                  • Last-minute cancellations are generally non-refundable.
                </li>

                <li>
                  • In case of weather or operational disruptions, alternative arrangements may be offered where possible.
                </li>
              </ul>
            </div>

            <div
              id="booking-policy"
              className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                Booking Policy
              </h3>

              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-600">
                <li>
                  • Trek slots are confirmed only after advance payment.
                </li>

                <li>
                  • Participants are requested to provide accurate contact information during booking.
                </li>

                <li>
                  • Departure schedules may vary depending on weather and operational conditions.
                </li>

                <li>
                  • Government ID proof may be required before departure.
                </li>
              </ul>
            </div>

            <div
              id="safety-guidelines"
              className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                Safety Guidelines
              </h3>

              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-600">
                <li>
                  • Trekkers should ensure they are physically fit before joining high-altitude expeditions.
                </li>

                <li>
                  • Follow instructions provided by trek leaders and local guides at all times.
                </li>

                <li>
                  • Carry essential medications and personal trekking gear.
                </li>

                <li>
                  • Weather in mountain regions can change rapidly and may affect itineraries.
                </li>
              </ul>
            </div>

            <div
              id="privacy-policy"
              className="rounded-[28px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                Privacy Policy
              </h3>

              <ul className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-600">
                <li>
                  • Personal information submitted through enquiry forms is used only for communication and booking purposes.
                </li>

                <li>
                  • We do not sell or share customer data with unrelated third parties.
                </li>

                <li>
                  • Basic analytics and tracking tools may be used to improve website experience.
                </li>

                <li>
                  • By using the website, users agree to the collection of necessary operational information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-[#121212] px-8 py-16 text-center text-white md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff6b00]">
            Begin Your Journey
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            The mountains are waiting. Let’s plan your next adventure.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
            Explore curated Himalayan treks, seasonal expeditions and unforgettable journeys built for modern explorers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore Treks
            </a>

            <a
              href="/contact"
              className="flex h-14 items-center justify-center rounded-2xl border border-white/10 px-8 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
