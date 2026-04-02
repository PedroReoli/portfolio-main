import { motion } from "framer-motion";

type Stat = {
  label: string;
  value: string;
  description: string;
};

type SummarySectionProps = {
  title: string;
  subtitle: string;
  statement: string;
  summary: readonly string[];
  stats?: readonly Stat[];
};

function getStatValueClass(value: string) {
  if (value.length >= 14) {
    return "text-[clamp(0.85rem,2vw,1.45rem)]";
  }

  if (value.length >= 11) {
    return "text-[clamp(0.95rem,2.3vw,1.7rem)]";
  }

  return "text-[clamp(1.15rem,2.8vw,2.25rem)]";
}

export default function SummarySection({
  title,
  subtitle,
  statement,
  summary,
  stats,
}: SummarySectionProps) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <section
      className="relative z-10 px-6 max-w-[90rem] mx-auto min-h-[100svh] flex flex-col justify-center py-10"
      id="resumo"
    >
      {/* Container wrapper for max compactness without vertical stretching */}
      <div className="flex flex-col gap-8 lg:gap-12 w-full max-h-fit">
        {/* Compact Header */}
        <div className="flex flex-col items-start w-full border-b border-white/10 pb-4">
          <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-mono mb-2">
            {subtitle}
          </span>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none text-left">
            {firstWord}{" "}
            {restWords && (
              <span
                className="text-transparent italic"
                style={{ WebkitTextStroke: "2px #cef441" }}
              >
                {restWords}
              </span>
            )}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column: Statement & Paras */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl lg:text-3xl font-black uppercase text-white leading-tight tracking-tighter">
              {statement}
            </h3>

            <div className="flex flex-col gap-4">
              {summary.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Mini Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats &&
              stats.length > 0 &&
              stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center gap-1 p-5 rounded-2xl border border-white/5 bg-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:border-[#cef441]/30 transition-colors group"
                >
                  <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                    {stat.label}
                  </span>
                  <span
                    className={`${getStatValueClass(
                      stat.value,
                    )} font-black text-white tracking-tight whitespace-nowrap group-hover:text-[#cef441] transition-colors leading-[0.9] mt-1`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] lg:text-xs text-zinc-400 font-light leading-tight mt-1">
                    {stat.description}
                  </span>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
