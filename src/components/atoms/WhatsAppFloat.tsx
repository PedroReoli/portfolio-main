import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

type Props = {
  href: string;
  label?: string;
};

const WhatsAppFloat = ({ href, label = "WhatsApp" }: Props) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[90] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all">
        <SiWhatsapp size={28} className="sm:w-8 sm:h-8" />
      </span>

      <span className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-black/80 backdrop-blur text-white text-[11px] font-mono uppercase tracking-[0.2em] px-3 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;
