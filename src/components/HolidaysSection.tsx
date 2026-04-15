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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-xl text-white">Public Holidays {year}</h2>
            <p className="text-white/40 text-sm mt-0.5">{upcoming.length} upcoming · {past.length} passed</p>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-400 hover:text-blue-300 text-sm font-body transition-colors"
          >
            {showAll ? 'Show upcoming' : `View all ${holidays.length}`}
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-xl h-24 animate-pulse" />
            ))}
          </div>
        ) : displayed.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-white/30 text-sm">No holidays data. Add holidays in TekOne admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {displayed.map((h, i) => {
              const info = getDayInfo(h.date)
              return (
                <div
                  key={h.id}
                  className={`glass glass-hover rounded-xl p-4 transition-all duration-200 animate-fade-in-up relative overflow-hidden ${
                    info.isPast ? 'opacity-40' : ''
                  } ${info.isToday ? 'border-amber-500/50 bg-amber-500/10' : ''}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {info.isToday && (
                    <span className="absolute top-2 right-2 text-[10px] bg-amber-500 text-black font-bold px-1.5 py-0.5 rounded-full">
                      TODAY
                    </span>
                  )}
                  <div className="font-display font-bold text-3xl text-white leading-none">{info.day}</div>
                  <div className="text-blue-400 text-xs font-body font-medium mt-0.5">
                    {info.month} · {info.weekday}
                  </div>
                  <div className="mt-2 text-white/70 text-xs font-body leading-tight line-clamp-2">{h.name}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
