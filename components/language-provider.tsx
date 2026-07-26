'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dictionaries, LANGS, type Dict, type Lang } from '@/lib/i18n'

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Dict
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'lavin-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // First-time visitors always start in English. We never use browser, device,
  // or country/location detection to pick the language.
  const [lang, setLangState] = useState<Lang>('en')

  // On mount (initial visit AND every refresh) restore the visitor's previously
  // chosen language from localStorage, if any. If nothing is saved, English
  // remains the default. Once a visitor picks Arabic/Turkish it is remembered
  // and re-applied on future visits — English is never forced again.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
      if (stored && dictionaries[stored]) {
        setLangState(stored)
      }
    } catch {
      /* ignore */
    }
  }, [])

  const dir = LANGS.find((l) => l.code === lang)?.dir ?? 'ltr'

  useEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = dir
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => {
    // Persist the manual choice so it is restored on future visits/refreshes.
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, dir, t: dictionaries[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
