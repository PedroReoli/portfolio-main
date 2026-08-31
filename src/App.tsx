import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GitHubPortfolioTemplate from "./components/templates/GitHubPortfolioTemplate"
import { LanguageProvider } from "./i18n/LanguageContext"

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<GitHubPortfolioTemplate />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
