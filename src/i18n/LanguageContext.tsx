import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "pt" | "en"

const STORAGE_KEY = "pedroreoli-portfolio-language"

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const detectLanguage = (): Language => {
  if (typeof window === "undefined") return "en"

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
  if (savedLanguage === "pt" || savedLanguage === "en") return savedLanguage

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  return browserLanguages.some((locale) => {
    const normalizedLocale = locale.toLowerCase()
    return normalizedLocale === "pt" || normalizedLocale.startsWith("pt-")
  })
    ? "pt"
    : "en"
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(detectLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
    document.title = language === "pt"
      ? "Pedro Lucas Reis | Full Stack Engineer"
      : "Pedro Lucas Reis | Full Stack Engineer"
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
