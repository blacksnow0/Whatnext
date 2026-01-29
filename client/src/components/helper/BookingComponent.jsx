import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Skiing",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, course, date, message } = formData;

    // pre-filled WhatsApp message
    const text = `Hello, I would like to book the ${course} course in Auli!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Start Date: ${date}\nMessage: ${message}\n\nPlease share more details.`;

    const whatsappNumber = "917017502703"; // country code + number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className=" py-16 px-6 lg:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-6">Book Your Auli Course</h2>
      <p className="text-gray-600 mb-10">
        Fill out your details below and confirm your spot. Our team will get back
        to you on WhatsApp shortly!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          >
            <option value="Skiing">Skiing - ₹29,999</option>
            <option value="Snowboarding">Snowboarding - ₹39,999</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Start Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Additional Message</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Any special requests or questions?"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-brand text-white px-8 py-3 rounded-xl  transition font-medium"
          >
            Send on WhatsApp
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Limited seats per batch — book early to confirm your slot.
          </p>
        </div>
      </form>
    </section>
  );
}
