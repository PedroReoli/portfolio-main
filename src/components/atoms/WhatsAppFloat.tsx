import { FaWhatsapp } from "react-icons/fa"

interface WhatsAppFloatProps {
  href: string
  label: string
}

const WhatsAppFloat = ({ href, label }: WhatsAppFloatProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  )
}

export default WhatsAppFloat
