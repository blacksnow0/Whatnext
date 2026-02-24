import { Home, Hotel, BarChart3, Settings } from "lucide-react";

export default function Sidebar({ closeSidebar }) {
  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Inventory", icon: Hotel },
    { name: "Reports", icon: BarChart3 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <h1 className="text-xl font-bold mb-10">HotelPro</h1>

      {/* Menu */}
      <nav className="space-y-2">
        {menu.map((item, i) => (
          <div
            key={i}
            onClick={closeSidebar}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-slate-100 transition"
          >
            <item.icon size={18} />
            {item.name}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-xs text-gray-400">v1.0 • 2026</div>
    </div>
  );
}
