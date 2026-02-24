import { Menu } from "lucide-react";

export default function Topbar({ openSidebar }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={openSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>

        <h2 className="font-semibold text-lg">Inventory Dashboard</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-sm text-gray-500">
          Demo Owner
        </span>
        <div className="w-9 h-9 rounded-full bg-slate-300" />
      </div>
    </header>
  );
}
