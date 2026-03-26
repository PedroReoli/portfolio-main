import { motion } from "framer-motion"
import { Database, Layers, Cpu, Wrench, Sparkles, GitBranch, Network, BrainCircuit, Wand2 } from "lucide-react"
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

// Custom Img-based Fallbacks using Icons8 as preferred by User
const ClaudeIcon = () => <img src="https://img.icons8.com/?size=100&id=BBldRmlvy0Ir&format=png&color=000000" alt="Claude AI" className="w-4 h-4 object-contain opacity-80 invert" />
const OpenAIIcon = () => <img src="https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/ChatGPT_logo.svg" alt="OpenAI/Codex" className="w-3.5 h-3.5 object-contain opacity-90 invert" />
const CursorIcon = () => <img src="https://img.icons8.com/?size=100&id=prd2cOETv0j2&format=png&color=000000" alt="Cursor Editor" className="w-4 h-4 object-contain opacity-80 invert" />
const GeminiIcon = () => <img src="https://img.icons8.com/?size=100&id=KKGSMFdCbd1Z&format=png&color=000000" alt="Gemini AI" className="w-4 h-4 object-contain opacity-80 invert" />

type GenericIconType = IconType | LucideIcon | React.FC

const techIconMap: Record<string, GenericIconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,
  TailwindCSS: SiTailwindcss,
  "Framer Motion": SiFramer,
  "Three.js": SiThreedotjs,
  "Node.js": SiNodedotjs,
  "C#": SiCsharp,
  Express: SiExpress,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  Redux: SiRedux,
  Git: SiGit,
  GitHub: SiGithub,
  Swagger: SiSwagger,
  Postman: SiPostman,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  "AWS SQS": SiAmazonaws,
  
  "Cursor": CursorIcon,
  "Claude": ClaudeIcon,
  "Gemini": GeminiIcon,
  "MCP": Network,
  "LLM Workflows": OpenAIIcon,
  "Prompt Engineering": GeminiIcon
}

type CategoryIconType = IconType | LucideIcon

const categoryIconMap: Record<string, CategoryIconType> = {
  Frontend: SiReact,
  Backend: SiNodedotjs,
  "AI / Agentic": Sparkles,
  Data: Database,
  "Distributed Systems": Layers,
  "State Management": Cpu,
  Tools: Wrench,
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="relative z-10 px-6 max-w-7xl mx-auto py-16" id="competencias">
      <div className="mb-10">
        <h2 className="text-zinc-500 font-mono text-xs tracking-[0.2em] uppercase font-semibold mb-2">Engenharia</h2>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white max-w-3xl">
          Stack Técnica & Ferramentas
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {skills.map((group, groupIdx) => {
          const CategoryIcon = categoryIconMap[group.title] ?? GitBranch

          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
              key={group.title}
              className="flex flex-col gap-4"
            >
              <h4 className="flex items-center gap-2 text-sm font-medium text-white pb-2 border-b border-zinc-800">
                <CategoryIcon size={14} className="text-zinc-500" />
                {group.title}
              </h4>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = techIconMap[item] ?? Sparkles
                  // Depending on if the icon is a lucide react component or an image fallback component
                  return (
                    <li 
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800/60 bg-[#09090b] text-zinc-400 text-xs font-medium hover:text-white hover:border-zinc-500 transition-colors shadow-sm"
                    >
                      <span className="opacity-70 flex items-center justify-center w-3.5 h-3.5">
                        <Icon size={14} />
                      </span>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
