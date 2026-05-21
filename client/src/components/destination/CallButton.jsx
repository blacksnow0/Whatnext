import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+917017502703"
      className="lg:hidden fixed left-3 bottom-24 z-40"
    >
      <div className="w-13 h-13 rounded-full bg-blue-600/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_24px_rgba(37,99,235,0.35)] flex items-center justify-center">
        <div className="call-shake text-white">
          <Phone size={24} />
        </div>
      </div>
    </a>
  );
};

export default CallButton;