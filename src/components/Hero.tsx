import { useState, useEffect } from 'react'

export default function Hero() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  const dateStr = time.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  const hour = time.getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'
  const emoji = hour < 12 ? '🌤️' : hour < 17 ? '☀️' : '🌙'

  return (
    <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="animate-fade-in-up">
          <p className="text-blue-300/80 text-xs font-body font-medium tracking-widest uppercase mb-2">
            CSharpTek · Internal Portal
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            {greeting} {emoji}
          </h1>
          <p className="mt-3 text-blue-200/60 text-base font-body max-w-md">
            Stay up to date with holidays, announcements, and what's happening across the company.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-right backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="font-display font-bold text-3xl tracking-tight">{timeStr}</p>
          <p className="text-blue-200/70 text-sm mt-1 font-body">{dateStr}</p>
          <p className="text-blue-200/40 text-xs mt-0.5 font-body">Chennai, India (IST)</p>
        </div>
      </div>
    </section>
  )
}
