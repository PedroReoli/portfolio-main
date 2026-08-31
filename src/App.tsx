import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GitHubPortfolioTemplate from "./components/templates/GitHubPortfolioTemplate"
import { LanguageProvider } from "./i18n/LanguageContext"
import { MotionConfig } from "framer-motion"

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<GitHubPortfolioTemplate />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  )
}

export default App
