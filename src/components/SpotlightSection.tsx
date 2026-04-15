const SPOTLIGHTS = [
  {
    id: '1',
    name: 'Priya Ramesh',
    role: 'Senior Engineer',
    kudos: 'Delivered the TekOne leave module ahead of schedule and mentored two junior developers through their first production deployments.',
    emoji: '⭐',
    month: 'April 2026',
  },
  {
    id: '2',
    name: 'Arjun Krishnan',
    role: 'Sales Lead',
    kudos: 'Closed the highest-value enterprise deal in company history and consistently exceeded quarterly targets by 30%.',
    emoji: '🚀',
    month: 'March 2026',
  },
]

const INITIALS_COLORS = [
  'from-violet-500 to-violet-700',
  'from-cyan-500 to-cyan-700',
]

export default function SpotlightSection() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-xl text-white">Employee Spotlight</h2>
            <p className="text-white/40 text-sm mt-0.5">Recognising outstanding contributions</p>
          </div>
          <span className="text-white/20 text-xs font-body italic">Sample data · Admin panel coming soon</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {SPOTLIGHTS.map((s, i) => {
            const initials = s.name.split(' ').map(n => n[0]).join('')
            return (
              <div
                key={s.id}
                className="glass glass-hover rounded-2xl p-6 flex gap-5 items-start transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${INITIALS_COLORS[i % INITIALS_COLORS.length]} flex items-center justify-center`}>
                    <span className="font-display font-bold text-white text-lg">{initials}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 text-xl">{s.emoji}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-white">{s.name}</h3>
                      <p className="text-white/40 text-xs font-body">{s.role}</p>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full font-display font-semibold flex-shrink-0">
                      {s.month}
                    </span>
                  </div>
                  <p className="mt-3 text-white/60 text-sm font-body leading-relaxed italic">
                    "{s.kudos}"
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
