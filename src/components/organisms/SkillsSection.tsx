import { motion } from "framer-motion"
import { Database, Layers, Cpu, Wrench, Sparkles, GitBranch, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiNodedotjs,
  SiCsharp,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiRedux,
  SiGit,
  SiGithub,
  SiSwagger,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiAmazonaws
} from "react-icons/si"

type SkillGroup = {
  title: string
  items: readonly string[]
}

type SkillsSectionProps = {
  skills: readonly SkillGroup[]
}

const ClaudeIcon = () => <img src="https://img.icons8.com/?size=100&id=BBldRmlvy0Ir&format=png&color=000000" alt="Claude AI" className="w-4 h-4 object-contain opacity-80 invert" />
const OpenAIIcon = () => <img src="https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/ChatGPT_logo.svg" alt="OpenAI/Codex" className="w-3.5 h-3.5 object-contain opacity-90 invert" />
const CursorIcon = () => <img src="https://img.icons8.com/?size=100&id=prd2cOETv0j2&format=png&color=000000" alt="Cursor Editor" className="w-4 h-4 object-contain opacity-80 invert" />
const GeminiIcon = () => <img src="https://img.icons8.com/?size=100&id=KKGSMFdCbd1Z&format=png&color=000000" alt="Gemini AI" className="w-4 h-4 object-contain opacity-80 invert" />

type GenericIconType = IconType | LucideIcon | React.FC

const techIconMap: Record<string, GenericIconType> = {
  React: SiReact, "Next.js": SiNextdotjs, TypeScript: SiTypescript, HTML: SiHtml5, CSS: SiCss3,
  TailwindCSS: SiTailwindcss, "Framer Motion": SiFramer, "Three.js": SiThreedotjs, "Node.js": SiNodedotjs, "C#": SiCsharp,
  Express: SiExpress, NestJS: SiNestjs, GraphQL: SiGraphql, PostgreSQL: SiPostgresql, MySQL: SiMysql,
  MongoDB: SiMongodb, Redis: SiRedis, Kafka: SiApachekafka, RabbitMQ: SiRabbitmq, Redux: SiRedux,
  Git: SiGit, GitHub: SiGithub, Swagger: SiSwagger, Postman: SiPostman, ESLint: SiEslint,
  Prettier: SiPrettier, "AWS SQS": SiAmazonaws,
  Cursor: CursorIcon, Claude: ClaudeIcon, Gemini: GeminiIcon, MCP: Network, "LLM Workflows": OpenAIIcon, "Prompt Engineering": GeminiIcon
}

type CategoryIconType = IconType | LucideIcon

const categoryIconMap: Record<string, CategoryIconType> = {
  Frontend: SiReact, Backend: SiNodedotjs, "AI / Agentic": Sparkles, Data: Database,
  "Distributed Systems": Layers, "State Management": Cpu, Tools: Wrench,
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="relative z-10 px-6 max-w-[90rem] mx-auto py-24 lg:py-32" id="competencias">
      <div className="mb-16 md:mb-24 flex flex-col items-center">
        <h2 className="text-zinc-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-center">Tech Matrix</h2>
        <h3 className="text-[12vw] sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.85] text-center">
          SYSTEM<br/><span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>SPECS</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((group, groupIdx) => {
          const CategoryIcon = categoryIconMap[group.title] ?? GitBranch

          return (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              key={group.title}
              className="group relative bg-[#0a0a0a] rounded-3xl p-6 border border-white/10 hover:border-[#cef441]/40 transition-colors shadow-2xl flex flex-col justify-start overflow-hidden gap-6"
            >
              {/* Top Row: Icon + Title + SYS */}
              <div className="flex justify-between items-center relative z-10 w-full border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white group-hover:bg-[#cef441] group-hover:text-black transition-colors border border-white/10 group-hover:border-transparent shrink-0">
                    <CategoryIcon size={20} className="opacity-80 group-hover:opacity-100" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-white group-hover:text-[#cef441] transition-colors m-0 leading-none lg:mt-1">
                    {group.title}
                  </h4>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono tracking-[0.2em] group-hover:text-[#cef441]/70 transition-colors self-start lg:mt-2 hidden sm:block">
                  SYS.0{groupIdx + 1}
                </span>
              </div>
              
              {/* Tags */}
              <ul className="flex flex-wrap gap-2 relative z-10 w-full mb-2">
                {group.items.map((item) => {
                  const Icon = techIconMap[item] ?? Sparkles
                  return (
                    <li 
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-[#111] text-zinc-400 text-[10px] font-medium uppercase tracking-wider group-hover:border-white/10 transition-colors"
                    >
                      <span className="opacity-60 flex items-center w-3 h-3">
                        <Icon size={12} />
                      </span>
                      {item}
                    </li>
                  )
                })}
              </ul>
              
              {/* Background decorative glow */}
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#cef441]/0 group-hover:bg-[#cef441]/5 rounded-full blur-3xl transition-colors duration-700 pointer-events-none" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
