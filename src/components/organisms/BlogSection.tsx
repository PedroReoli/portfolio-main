import { FiClock, FiCalendar, FiArrowRight, FiBookOpen, FiFileText, FiCpu, FiLayers } from "react-icons/fi"
import SectionHeading from "../molecules/SectionHeading"

export interface BlogPost {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly date: string
  readonly readTime: string
  readonly excerpt: string
  readonly htmlUrl: string
}

interface BlogSectionProps {
  posts: readonly BlogPost[]
  lang: "pt" | "en"
  onViewAllClick?: () => void
}

const renderBlogCategoryIcon = (category: string) => {
  if (category.toLowerCase().includes("inteligência") || category.toLowerCase().includes("ai")) {
    return <FiCpu className="w-3.5 h-3.5 text-[#00f0ff]" />
  }
  if (category.toLowerCase().includes("arquitetura") || category.toLowerCase().includes("ui")) {
    return <FiLayers className="w-3.5 h-3.5 text-[#00f0ff]" />
  }
  return <FiFileText className="w-3.5 h-3.5 text-[#00f0ff]" />
}

const BlogSection = ({ posts, lang, onViewAllClick }: BlogSectionProps) => {
  // Enforce max 3 items displayed on main section
  const displayedPosts = posts.slice(0, 3)
  const remainingCount = posts.length - 3

  const titles = {
    kicker: lang === "pt" ? "Artigos & Conteúdo" : "Articles & Writing",
    title1: lang === "pt" ? "BLOG &" : "BLOG &",
    title2: lang === "pt" ? "PUBLICAÇÕES" : "PUBLICATIONS",
    readMore: lang === "pt" ? "Ler Artigo Completo" : "Read Article",
    viewAll:
      lang === "pt"
        ? `Ver Todos os Artigos (+${remainingCount} ${remainingCount === 1 ? "artigo" : "artigos"})`
        : `View All Articles (+${remainingCount} ${remainingCount === 1 ? "article" : "articles"})`,
  }

  const handleViewAll = () => {
    if (onViewAllClick) {
      onViewAllClick()
    } else {
      window.location.href = "/blog"
    }
  }

  return (
    <section id="blog" className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        kicker={titles.kicker}
        title1={titles.title1}
        title2={titles.title2}
      />

      {/* Modern, Beautiful Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedPosts.map((post) => (
          <div
            key={post.id}
            className="group glass-card rounded-3xl p-6 flex flex-col justify-between border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all min-h-[320px]"
          >
            <div className="space-y-4">
              {/* Card Header Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 flex items-center gap-1.5 shadow-sm">
                  {renderBlogCategoryIcon(post.category)}
                  <span>{post.category}</span>
                </span>

                <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3 text-[#00f0ff]" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3 h-3 text-zinc-400" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            {/* Card Action Link Button */}
            <div className="pt-5 mt-4 border-t border-white/5">
              <a
                href={post.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-zinc-900 border border-white/15 text-white hover:bg-[#00f0ff] hover:text-zinc-950 text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-sm group-hover:border-[#00f0ff]/40"
              >
                <span>{titles.readMore}</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button "Ver Todos os Artigos (+X artigos)" */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewAll}
            className="px-6 py-3 rounded-full bg-zinc-900 border border-[#00f0ff]/40 text-white hover:bg-[#00f0ff] hover:text-zinc-950 text-xs md:text-sm font-black flex items-center gap-2 shadow-lg shadow-[#00f0ff]/10 transition-all"
          >
            <FiBookOpen className="w-4 h-4" />
            <span>{titles.viewAll}</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  )
}

export default BlogSection
