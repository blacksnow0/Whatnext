import { useState, useEffect } from "react";
import StatsCard from "../components/admin/StatsCard";
import RoomInventorySection from "../components/admin/AvailabilityTable";
import DashboardLayout from "../layout/DashboardLayout";

const hotelData = {
  Badrinath: [
    { name: "New Urvashi", totalRooms: 32 },
    { name: "Urvashi", totalRooms: 28 },
    { name: "Urvashi Premium", totalRooms: 40 },
    { name: "Om Palace", totalRooms: 24 },
  ],
  Srinagar: [
    { name: "Urvashi", totalRooms: 30 },
    { name: "Samrat Palace", totalRooms: 22 },
    { name: "Hotel Chahat", totalRooms: 26 },
  ],
  Rishikesh: [{ name: "Shivalik", totalRooms: 35 }],
  Yamunotri: [{ name: "Shivalik Resort", totalRooms: 38 }],
  Gangotri: [{ name: "Shivalik Resort Uttarkashi", totalRooms: 27 }],
  Kedarnath: [
    { name: "Shivalik Resort", totalRooms: 36 },
    { name: "Musk Hills", totalRooms: 20 },
  ],
};

export default function AdminAvailability() {
  const cities = Object.keys(hotelData);

  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedHotel, setSelectedHotel] = useState(hotelData[cities[0]][0]);
  const [selectedDate, setSelectedDate] = useState("");

  const [bookedRooms, setBookedRooms] = useState(0);

  useEffect(() => {
    const randomBooked = Math.floor(Math.random() * selectedHotel.totalRooms);
    setBookedRooms(randomBooked);
  }, [selectedHotel, selectedDate]);

  const availableRooms = selectedHotel.totalRooms - bookedRooms;
  const occupancy = ((bookedRooms / selectedHotel.totalRooms) * 100).toFixed(1);

  return (
    <DashboardLayout>
      <div className="w-full space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Hotel Inventory Dashboard</h1>
          <p className="text-gray-500 text-sm">
            Monitor availability, occupancy and room inventory
          </p>
        </div>

        {/* Filters Card */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm grid md:grid-cols-3 gap-6">
          {/* City */}
          <FilterSelect
            label="Location"
            value={selectedCity}
            onChange={(city) => {
              setSelectedCity(city);
              setSelectedHotel(hotelData[city][0]);
            }}
            options={cities}
          />

          {/* Hotel */}
          <FilterSelect
            label="Hotel"
            value={selectedHotel.name}
            onChange={(name) => {
              const hotel = hotelData[selectedCity].find(
                (h) => h.name === name,
              );
              setSelectedHotel(hotel);
            }}
            options={hotelData[selectedCity].map((h) => h.name)}
          />

          {/* Date */}
          <div>
            <label className="block text-sm mb-2 font-medium">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>

        {/* KPI Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard title="Total Rooms" value={selectedHotel.totalRooms} />
          <StatsCard title="Booked Rooms" value={bookedRooms} />
          <StatsCard title="Available Rooms" value={availableRooms} />
          <StatsCard title="Occupancy Rate" value={`${occupancy}%`} />
        </div>

        {/* Inventory Table */}
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <RoomInventorySection
            totalRooms={selectedHotel.totalRooms}
            bookedRooms={bookedRooms}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ---------- Small reusable filter ---------- */

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm mb-2 font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
