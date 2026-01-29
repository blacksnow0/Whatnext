import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "7-Day Professional Ski Program",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, course, date, message } = formData;

    const text = `Hello! I want to book the following program in Auli:\n\nCourse: ${course}\nName: ${name}\nPhone: ${phone}\nPreferred Date: ${date}\nMessage: ${message}\n\nPlease share availability and next steps.`;

    const whatsappNumber = "917017502703";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gray-50 py-14 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT INFO PANEL */}

        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Reserve Your Ski Slot
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Secure your seat for the upcoming Auli ski batches. Limited slots
            available per group to ensure quality training.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>✓ Certified ski instructors</li>
            <li>✓ Complete equipment included</li>
            <li>✓ Accommodation & meals covered</li>
            <li>✓ Small batch training</li>
          </ul>
        </div>

        {/* FORM CARD */}

        <div className="bg-white rounded-2xl shadow-xl p-7">

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="WhatsApp number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Select Program</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <option>2-Day Beginner Snow Experience — ₹9,999</option>
                <option>3-Day Snow Adventure Program — ₹14,999</option>
                <option>4-Day Skill Builder Program — ₹19,999</option>
                <option>7-Day Professional Ski Program — ₹30,000</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Preferred Start Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Additional Notes (Optional)</label>
              <textarea
                name="message"
                rows="2"
                placeholder="Any special requests?"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition"
            >
              Continue on WhatsApp →
            </button>

            <p className="text-xs text-center text-gray-500">
              Our team will confirm availability and next steps instantly.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}
