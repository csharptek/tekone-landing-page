import { useState } from 'react'
import { useHolidays } from '../hooks/usePublicData'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function HolidaysSection() {
  const year = new Date().getFullYear()
  const { data: holidays, loading } = useHolidays(year)
  const [showAll, setShowAll] = useState(false)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcoming = holidays.filter(h => new Date(h.date) >= today)
  const past = holidays.filter(h => new Date(h.date) < today)
  const displayed = showAll ? holidays : upcoming.slice(0, 6)

  const getDayInfo = (dateStr: string) => {
    const d = new Date(dateStr)
    return {
      day: d.getDate(),
      month: MONTHS[d.getMonth()],
      weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
      isPast: d < today,
      isToday: d.toDateString() === today.toDateString(),
    }
  }

  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-900">Public Holidays {year}</h2>
            <p className="text-brand-600/50 text-sm mt-0.5 font-body">
              {loading ? 'Loading…' : `${upcoming.length} upcoming · ${past.length} passed · Live from TekOne`}
            </p>
          </div>
          {!loading && holidays.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-brand-600 hover:text-brand-700 text-sm font-body font-medium transition-colors"
            >
              {showAll ? 'Show upcoming' : `View all ${holidays.length}`}
            </button>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl h-24 bg-blue-100 animate-pulse" />
            ))}
          </div>
        ) : displayed.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-brand-600/40 text-sm">No holidays found. Add holidays via TekOne admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {displayed.map((h, i) => {
              const info = getDayInfo(h.date)
              return (
                <div
                  key={h.id}
                  className={`card card-hover rounded-xl p-4 transition-all duration-200 animate-fade-in-up relative overflow-hidden cursor-default ${
                    info.isPast ? 'opacity-40' : ''
                  } ${info.isToday ? '!border-amber-400 bg-amber-50' : ''}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {info.isToday && (
                    <span className="absolute top-2 right-2 text-[9px] bg-amber-400 text-white font-bold px-1.5 py-0.5 rounded-full">
                      TODAY
                    </span>
                  )}
                  <div className="font-display font-bold text-3xl text-brand-800 leading-none">{info.day}</div>
                  <div className="text-brand-600 text-xs font-body font-medium mt-0.5">
                    {info.month} · {info.weekday}
                  </div>
                  <div className="mt-2 text-brand-700/70 text-xs font-body leading-tight line-clamp-2">{h.name}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
