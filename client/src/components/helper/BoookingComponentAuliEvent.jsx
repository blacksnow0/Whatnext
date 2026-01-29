import React, { useState } from "react";

export default function BookingForm({ whatsappNumber }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    travelers: "",
    city: "",
    photoshoot: "No",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    return `
Hi, I would like to book the ${formData.event} package in Auli 2025.

Name: ${formData.name}
Phone: ${formData.phone}
Number of Travelers: ${formData.travelers}
City: ${formData.city || "Not specified"}
Photoshoot Add-on: ${formData.photoshoot}
Additional Notes: ${formData.notes || "None"}

Please share details about availability, payment, and next steps.
    `;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.event ||
      !formData.travelers
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-ubuntu font-semibold text-brand">
        Book Your Auli Experience
      </h2>

      {/* Name */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Full Name *</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          type="text"
          name="phone"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Event Selection */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Select Event *
        </label>
        <select
          name="event"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Choose an event</option>
          <option value="Christmas DJ Night (24–26 Dec 2025)">
            Christmas DJ Night (24–26 Dec 2025)
          </option>
          <option value="New Year DJ Night (31 Dec 2025 – 2 Jan 2026)">
            New Year DJ Night (31 Dec 2025 – 2 Jan 2026)
          </option>
        </select>
      </div>

      {/* Travelers */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Number of Travelers *
        </label>
        <input
          type="number"
          name="travelers"
          min="1"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          placeholder="e.g., 2"
          value={formData.travelers}
          onChange={handleChange}
          required
        />
      </div>

      {/* City */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          City You're Traveling From
        </label>
        <input
          type="text"
          name="city"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          placeholder="Your City"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      {/* Photoshoot Add-on */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Photoshoot Add-on
        </label>
        <select
          name="photoshoot"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          value={formData.photoshoot}
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {/* Notes */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows="3"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand outline-none"
          placeholder="Any special requests…"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-brand text-white rounded-full font-semibold shadow-md hover:bg-brand/90 transition"
      >
        Send Booking Details on WhatsApp
      </button>
    </form>
  );
}
