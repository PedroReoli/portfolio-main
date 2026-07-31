import { motion } from "framer-motion"

interface SectionHeadingProps {
  kicker: string
  title1: string
  title2: string
}

const SectionHeading = ({ kicker, title1, title2 }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="mb-8 space-y-1"
    >
      <span className="text-xs font-black uppercase tracking-widest text-[#00f0ff]">
        {kicker}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
        {title1} <span className="text-[#00f0ff]">{title2}</span>
      </h2>
    </motion.div>
  )
}

export default SectionHeading
