import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";

export type ProjectMetric = { label: string; value: string };

export type ProjectDetails = {
  id: string;
  name: string;
  href: string;
  domain: string;
  type: string;
  category: string;
  shortDescription: string;
  stack: readonly string[];
  features: readonly string[];
  metrics: readonly ProjectMetric[];
};

type Labels = {
  stack: string;
  features: string;
  metrics: string;
  visit: string;
  close: string;
  typeLabel: string;
};

type Props = {
  project: ProjectDetails | null;
  labels: Labels;
  onClose: () => void;
};

const ProjectDetailsModal = ({ project, labels, onClose }: Props) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 rounded-[2rem] p-6 sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label={labels.close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#cef441] hover:text-black text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[10px] text-[#cef441] uppercase tracking-[0.2em] font-mono border border-[#cef441]/30 bg-[#cef441]/5 px-3 py-1.5 rounded-full">
                {labels.typeLabel}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-mono border border-white/10 px-3 py-1.5 rounded-full">
                {project.category}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono">
                {project.domain}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter italic leading-none text-white mb-5">
              {project.name}
            </h3>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8">
              {project.shortDescription}
            </p>

            <section className="mb-8">
              <h4 className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3">
                {labels.stack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-zinc-200 font-mono border border-white/10 bg-white/5 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h4 className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3">
                {labels.features}
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                  >
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#cef441] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h4 className="text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3">
                {labels.metrics}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]"
                  >
                    <div className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-mono mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#cef441] text-black font-semibold text-sm uppercase tracking-wider px-5 py-3 rounded-full hover:bg-white transition-colors"
            >
              {labels.visit}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
