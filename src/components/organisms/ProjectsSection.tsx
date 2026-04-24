import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import ProjectDetailsModal, {
  type ProjectDetails,
} from "../molecules/ProjectDetailsModal";

type ProjectType = "site" | "erp" | "saas" | "mobile" | "internal";

type Project = {
  id: string;
  name: string;
  href: string;
  domain: string;
  type: string;
  category: string;
  image?: string;
  shortDescription: string;
  stack: readonly string[];
  features: readonly string[];
  metrics: readonly { label: string; value: string }[];
};

type ProjectsLabels = {
  kicker: string;
  title1: string;
  title2: string;
  details: string;
  visit: string;
  stack: string;
  features: string;
  metrics: string;
  close: string;
  all?: string;
  types: Record<ProjectType, string>;
};

type Props = {
  projects: readonly Project[];
  labels: ProjectsLabels;
};

const TYPE_GRADIENTS: Record<ProjectType, string> = {
  site: "from-zinc-800 via-zinc-900 to-black",
  erp: "from-[#1a2e1a] via-[#0e1a10] to-black",
  saas: "from-[#2a1f4a] via-[#130e24] to-black",
  mobile: "from-[#1f2e4a] via-[#0e1524] to-black",
  internal: "from-[#3a2a14] via-[#1c1408] to-black",
};

const ProjectPlaceholder = ({
  type,
  name,
}: {
  type: ProjectType;
  name: string;
}) => (
  <div
    className={`absolute inset-0 bg-gradient-to-br ${TYPE_GRADIENTS[type]} flex items-center justify-center`}
  >
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(206,244,65,0.15) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="relative text-center px-6 select-none">
      <div className="text-[10px] text-[#cef441]/60 uppercase tracking-[0.4em] font-mono mb-2">
        {type}
      </div>
      <div className="text-2xl sm:text-3xl font-black uppercase tracking-tighter italic text-white/80">
        {name}
      </div>
    </div>
  </div>
);

type Filter = "all" | ProjectType;

export default function ProjectsSection({ projects, labels }: Props) {
  const [activeProject, setActiveProject] = useState<ProjectDetails | null>(
    null,
  );
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const acc: Record<string, number> = { all: projects.length };
    for (const p of projects) acc[p.type] = (acc[p.type] ?? 0) + 1;
    return acc;
  }, [projects]);

  const filterOrder: Filter[] = ["all", "site", "erp", "saas", "mobile", "internal"];
  const availableFilters = filterOrder.filter(
    (f) => f === "all" || (counts[f] ?? 0) > 0,
  );

  const visibleProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter, projects],
  );

  const allLabel = labels.all ?? "All";

  return (
    <>
      <section
        className="relative z-10 w-full bg-[#0a0a0a] py-24 lg:py-32"
        id="projetos"
      >
        <div className="px-6 max-w-[90rem] mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-14 flex flex-col items-start">
            <h2 className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
              {labels.kicker}
            </h2>
            <h3 className="text-[12vw] sm:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase text-white leading-none pb-4">
              {labels.title1}
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
              >
                {labels.title2}
              </span>
            </h3>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 md:mb-14 border-y border-white/10 py-5">
            {availableFilters.map((f) => {
              const isActive = f === filter;
              const label = f === "all" ? allLabel : labels.types[f];
              const count = counts[f] ?? 0;

              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={[
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] border transition-colors",
                    isActive
                      ? "bg-[#cef441] text-black border-[#cef441]"
                      : "bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white hover:border-white/25",
                  ].join(" ")}
                >
                  <span>{label}</span>
                  <span
                    className={[
                      "text-[10px] font-mono px-1.5 py-0.5 rounded-full",
                      isActive
                        ? "bg-black/20 text-black"
                        : "bg-white/5 text-zinc-500",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((proj, idx) => {
                const type = proj.type as ProjectType;
                const typeLabel = labels.types[type] ?? proj.type;

                return (
                  <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative flex flex-col bg-[#111] border border-white/5 hover:border-[#cef441]/40 rounded-3xl overflow-hidden transition-colors"
                  >
                    {/* Image / Placeholder */}
                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative w-full h-[200px] sm:h-[220px] bg-zinc-900 border-b border-white/10 block overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[#cef441]/0 group-hover:bg-[#cef441]/10 transition-colors duration-500 z-10 pointer-events-none" />

                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <ProjectPlaceholder type={type} name={proj.name} />
                      )}

                      <span className="absolute top-4 left-4 z-20 text-[9px] text-[#cef441] uppercase tracking-[0.25em] font-mono border border-[#cef441]/30 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full">
                        {typeLabel}
                      </span>
                      <span className="absolute top-4 right-4 z-20 text-[9px] text-white/60 font-mono tracking-widest bg-black/50 backdrop-blur border border-white/10 px-2 py-1 rounded-full">
                        {`${idx + 1}`.padStart(2, "0")}
                      </span>
                    </a>

                    {/* Content */}
                    <div className="flex flex-col w-full p-6 gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter italic leading-none text-white group-hover:text-[#cef441] transition-colors">
                          {proj.name}
                        </h4>
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${labels.visit} ${proj.name}`}
                          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-[#cef441] text-white group-hover:text-black transition-colors"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-mono border border-white/10 px-2.5 py-1 rounded-full">
                          {proj.category}
                        </span>
                        <span className="text-[9px] text-[#cef441]/80 uppercase tracking-[0.2em] font-mono truncate max-w-[180px]">
                          {proj.domain}
                        </span>
                      </div>

                      <p className="text-sm text-zinc-400 font-light leading-relaxed line-clamp-2">
                        {proj.shortDescription}
                      </p>

                      {/* Stack preview */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className="text-[10px] text-zinc-300 font-mono border border-white/10 bg-white/[0.03] px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                        {proj.stack.length > 4 && (
                          <span className="text-[10px] text-zinc-500 font-mono px-2 py-1">
                            +{proj.stack.length - 4}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveProject({
                            id: proj.id,
                            name: proj.name,
                            href: proj.href,
                            domain: proj.domain,
                            type: proj.type,
                            category: proj.category,
                            shortDescription: proj.shortDescription,
                            stack: proj.stack,
                            features: proj.features,
                            metrics: proj.metrics,
                          })
                        }
                        className="mt-1 inline-flex items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-white/80 hover:text-[#cef441] border border-white/10 hover:border-[#cef441]/40 bg-white/[0.03] hover:bg-[#cef441]/5 px-4 py-2.5 rounded-full transition-colors w-full"
                      >
                        <span>{labels.details}</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectDetailsModal
        project={activeProject}
        labels={{
          stack: labels.stack,
          features: labels.features,
          metrics: labels.metrics,
          visit: labels.visit,
          close: labels.close,
          typeLabel: activeProject
            ? labels.types[activeProject.type as ProjectType] ??
              activeProject.type
            : "",
        }}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
