import { useState, useEffect } from "react"
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiX,
  FiBookOpen,
  FiFileText,
  FiCpu,
  FiLayers,
} from "react-icons/fi"
import * as dbPT from "../../data/portfolio"
import * as dbEN from "../../data/portfolio.en"
import CustomCursor from "../atoms/CustomCursor"
import BlogHeader from "../organisms/BlogHeader"
import BlogFooter from "../organisms/BlogFooter"

interface BlogPageProps {
  onBackToPortfolio?: () => void
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

const BlogPage = ({ onBackToPortfolio }: BlogPageProps) => {
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Ensure page always loads at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const data = lang === "pt" ? dbPT : dbEN
  const posts = data.blogPosts

  // Extract unique categories
  const categories = [
    { id: "all", label: lang === "pt" ? "Todos os Artigos" : "All Articles" },
    ...Array.from(new Set(posts.map((p) => p.category))).map((cat) => ({
      id: cat,
      label: cat,
    })),
  ]

  // Filter posts based on search query & selected category
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesQuery =
      query === "" ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)

    return matchesCategory && matchesQuery
  })

  return (
    <div className="relative min-h-screen bg-[#080a11] text-zinc-100 font-sans selection:bg-[#00f0ff]/30 selection:text-white flex flex-col justify-between pt-20">
      <CustomCursor />

      {/* Background Mesh Grid */}
      <div className="bg-mesh" />

      {/* Dedicated Blog Header / Navbar (Fixed at Top) */}
      <BlogHeader
        lang={lang}
        toggleLang={() => setLang((l) => (l === "pt" ? "en" : "pt"))}
        onBackToPortfolio={onBackToPortfolio}
      />

      {/* Main Blog Page Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-8 flex-1 w-full relative z-10">
        {/* Title Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-[#00f0ff]/30 text-xs font-bold text-[#00f0ff]">
            <FiBookOpen className="w-4 h-4" />
            <span>
              {lang === "pt" ? "Publicações & Artigos Técnicos" : "Publications & Technical Articles"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {lang === "pt" ? "ARTIGOS & " : "ARTICLES & "}
            <span className="text-[#00f0ff]">CONTEÚDO</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400">
            {lang === "pt"
              ? "Reflexões, arquiteturas frontend, engenharia de prompts, performance web e padrões de desenvolvimento."
              : "Thoughts, frontend architectures, prompt engineering, web performance, and software patterns."}
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div id="search" className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "pt"
                  ? "Pesquisar por título, palavra-chave ou categoria..."
                  : "Search by title, keyword or category..."
              }
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f0ff] transition-all text-sm font-medium shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-zinc-400 hover:text-white"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#00f0ff] text-zinc-950 shadow-md shadow-[#00f0ff]/20"
                    : "bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-zinc-400 mb-6 flex items-center justify-between">
          <span>
            {lang === "pt"
              ? `Exibindo ${filteredPosts.length} de ${posts.length} artigos`
              : `Showing ${filteredPosts.length} of ${posts.length} articles`}
          </span>
        </div>

        {/* Articles List Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
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
                    <span>{lang === "pt" ? "Ler Artigo Completo (Nova Aba)" : "Read Article (New Tab)"}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-white/5 space-y-3">
            <p className="text-base font-bold text-zinc-300">
              {lang === "pt"
                ? "Nenhum artigo encontrado para sua pesquisa."
                : "No articles found matching your query."}
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
              className="text-xs font-bold text-[#00f0ff] underline"
            >
              {lang === "pt" ? "Limpar filtros" : "Clear filters"}
            </button>
          </div>
        )}
      </main>

      {/* Dedicated Blog Footer */}
      <BlogFooter
        lang={lang}
        onBackToPortfolio={onBackToPortfolio}
      />
    </div>
  )
}

export default BlogPage
