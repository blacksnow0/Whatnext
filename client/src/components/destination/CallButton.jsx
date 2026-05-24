import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
  href="tel:+917017502703"
  className="lg:hidden fixed left-3 bottom-24 z-40"
>
  <div
    className="
      relative
      w-13 h-13
      rounded-full
      bg-blue-600/90
      backdrop-blur-2xl
      border border-white/10
      flex items-center justify-center

      shadow-[0_0_20px_rgba(37,99,235,0.45)]
      hover:shadow-[0_0_40px_rgba(37,99,235,0.85)]

      animate-[callGlow_3s_ease-in-out_infinite]
      transition-all duration-300
    "
  >
    {/* SOFT GLOW */}
    <div
      className="
        absolute inset-0
        rounded-full
        bg-blue-500
        blur-xl
        opacity-50
        -z-10
      "
    />

    {/* ICON */}
    <div className="call-shake text-white">
      <Phone size={24} />
    </div>
  </div>
</a>
  );
};

export default CallButton;