import { useState, useEffect } from 'react'
import type { Holiday, BirthdayPerson, AnniversaryPerson } from '../types'

const API = import.meta.env.VITE_TEKONE_API_URL || 'https://tekpayroll2026-production.up.railway.app'

async function fetchPublic<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}${path}`)
    if (!res.ok) return null
    const json = await res.json()
    return json.data as T
  } catch {
    return null
  }
}

export function useHolidays(year: number) {
  const [data, setData] = useState<Holiday[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPublic<Holiday[]>(`/api/public/holidays?year=${year}`).then((d) => {
      setData(d || [])
      setLoading(false)
    })
  }, [year])

  return { data, loading }
}

export function useBirthdays() {
  const [birthdays, setBirthdays] = useState<BirthdayPerson[]>([])
  const [anniversaries, setAnniversaries] = useState<AnniversaryPerson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPublic<{ birthdays: BirthdayPerson[]; anniversaries: AnniversaryPerson[] }>(
      '/api/public/birthdays'
    ).then((d) => {
      setBirthdays(d?.birthdays || [])
      setAnniversaries(d?.anniversaries || [])
      setLoading(false)
    })
  }, [])

  return { birthdays, anniversaries, loading }
}
