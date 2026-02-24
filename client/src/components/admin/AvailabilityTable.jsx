import { useState } from "react";

export default function RoomInventorySection({ totalRooms, bookedRooms }) {
  const [showRooms, setShowRooms] = useState(false);

  const availableRooms = totalRooms - bookedRooms;

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-6">
      {/* Summary Row */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">Room Inventory</h2>
          <p className="text-sm text-gray-500">
            {availableRooms} available out of {totalRooms}
          </p>
        </div>

        <button
          onClick={() => setShowRooms(!showRooms)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
        >
          {showRooms ? "Hide Rooms" : "View Rooms"}
        </button>
      </div>

      {/* Expandable Grid */}
      {showRooms && (
        <AvailabilityTable totalRooms={totalRooms} bookedRooms={bookedRooms} />
      )}
    </div>
  );
}
