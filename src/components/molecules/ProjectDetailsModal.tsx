import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiExternalLink, FiCheckCircle } from "react-icons/fi"
import Tag from "../atoms/Tag"

interface Metric {
  readonly label: string
  readonly value: string
}

interface Project {
  readonly id: string
  readonly name: string
  readonly href: string
  readonly domain: string
  readonly type: string
  readonly category: string
  readonly image: string
  readonly shortDescription: string
  readonly stack: readonly string[]
  readonly features: readonly string[]
  readonly metrics: readonly Metric[]
}

interface ProjectDetailsModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  labels: {
    readonly visit: string
    readonly stack: string
    readonly features: string
    readonly metrics: string
    readonly close: string
  }
}

const ProjectDetailsModal = ({
  project,
  isOpen,
  onClose,
  labels,
}: ProjectDetailsModalProps) => {
  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl cursor-pointer overflow-y-auto"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-[#00f0ff]/40 rounded-3xl overflow-y-auto p-6 md:p-8 shadow-2xl text-zinc-100 space-y-6 cursor-default my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-white/10 z-10"
            aria-label={labels.close}
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="space-y-3 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                {project.category}
              </span>
              <span className="text-xs font-bold text-zinc-400">
                {project.domain}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white">
              {project.name}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* 2-Column Content Layout (Metrics + Features) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            {/* Metrics Column */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#00f0ff]">
                {labels.metrics}
              </h3>
              <div className="space-y-2.5">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-zinc-900/80 border border-white/5 space-y-0.5"
                  >
                    <div className="text-lg font-black text-white">{m.value}</div>
                    <div className="text-xs font-bold text-zinc-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Column */}
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#00f0ff]">
                {labels.features}
              </h3>
              <div className="space-y-2">
                {project.features.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-zinc-900/70 border border-white/5 flex items-start gap-2.5 text-xs md:text-sm text-zinc-200 leading-relaxed"
                  >
                    <FiCheckCircle className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack Section */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#00f0ff]">
              {labels.stack}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-[11px] text-zinc-500 font-medium">
              💡 Clique fora do modal para fechar
            </span>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#00f0ff] text-zinc-950 hover:bg-[#38bdf8] text-xs md:text-sm font-extrabold flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
            >
              <span>{labels.visit}</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectDetailsModal
