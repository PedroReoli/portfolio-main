import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GitHubPortfolioTemplate from "./components/templates/GitHubPortfolioTemplate"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GitHubPortfolioTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

