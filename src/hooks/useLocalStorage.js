import { useEffect, useState } from 'react'
import { SETTINGS } from '../settings.js'

export function readStore(key, fallback) {
  try {
    const raw = window.localStorage.getItem(SETTINGS.storagePrefix + key)
    if (raw == null) return fallback
    const parsed = JSON.parse(raw)
    if (Array.isArray(fallback) && !Array.isArray(parsed)) return fallback
    if (fallback && typeof fallback === 'object' && !Array.isArray(fallback) && (typeof parsed !== 'object' || parsed === null)) return fallback
    return parsed
  } catch {
    return fallback
  }
}

export default function useLocalStorage(key, fallback) {
  const [value, setValue] = useState(() => readStore(key, fallback))
  useEffect(() => {
    try {
      window.localStorage.setItem(SETTINGS.storagePrefix + key, JSON.stringify(value))
    } catch {
      /* storage full or blocked: keep working in memory */
    }
  }, [key, value])
  return [value, setValue]
}
