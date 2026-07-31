import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import PortfolioTemplate from "./components/templates/PortfolioTemplate"
import BlogPage from "./components/pages/BlogPage"
import CustomCursor from "./components/atoms/CustomCursor"

const PortfolioRouteWrapper = () => {
  const navigate = useNavigate()
  return (
    <PortfolioTemplate
      onNavigateToBlog={() => navigate("/blog")}
    />
  )
}

const BlogRouteWrapper = () => {
  const navigate = useNavigate()
  return (
    <BlogPage
      onBackToPortfolio={() => navigate("/")}
    />
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<PortfolioRouteWrapper />} />
        <Route path="/blog" element={<BlogRouteWrapper />} />
        <Route path="/blog/*" element={<BlogRouteWrapper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
