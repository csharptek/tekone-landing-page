export default function Hero() {
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  const hour = now.getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  return (
    <section className="relative overflow-hidden py-16 px-6">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="animate-fade-in-up">
            <p className="text-blue-400 font-body text-sm font-medium mb-2 tracking-widest uppercase">
              Welcome to CSharpTek
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              {greeting} 👋
            </h1>
            <p className="mt-3 text-white/50 font-body text-base max-w-md">
              Your company intranet — holidays, announcements, and team updates in one place.
            </p>
          </div>

          <div className="glass rounded-2xl px-6 py-4 text-right animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="font-display font-bold text-3xl text-white tracking-tight">{timeStr}</p>
            <p className="text-white/40 text-sm mt-1 font-body">{dateStr}</p>
            <p className="text-white/30 text-xs mt-0.5 font-body">Chennai, India (IST)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
