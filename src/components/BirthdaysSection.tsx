import { useBirthdays } from '../hooks/usePublicData'

function Avatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const colors = ['from-blue-500 to-blue-700', 'from-purple-500 to-purple-700', 'from-emerald-500 to-emerald-700', 'from-rose-500 to-rose-700', 'from-amber-500 to-amber-700']
  const color = colors[name.charCodeAt(0) % colors.length]

  if (photoUrl) {
    return (
      <img src={photoUrl} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
    )
  }
  return (
    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
      <span className="text-white font-display font-bold text-sm">{initials}</span>
    </div>
  )
}

export default function BirthdaysSection() {
  const { birthdays, anniversaries, loading } = useBirthdays()
  const total = birthdays.length + anniversaries.length

  if (!loading && total === 0) return null

  return (
    <section className="px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Birthdays */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎂</span>
              <div>
                <h3 className="font-display font-bold text-white">Birthdays Today</h3>
                {!loading && <p className="text-white/40 text-xs">{birthdays.length} celebration{birthdays.length !== 1 ? 's' : ''}</p>}
              </div>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map(i => <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />)}
              </div>
            ) : birthdays.length === 0 ? (
              <p className="text-white/30 text-sm py-4 text-center">No birthdays today 🎈</p>
            ) : (
              <div className="space-y-3">
                {birthdays.map(p => (
                  <div key={p.employeeId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Avatar name={p.name} photoUrl={p.photoUrl} />
                    <div className="min-w-0">
                      <p className="font-body font-semibold text-white text-sm truncate">{p.name}</p>
                      <p className="text-white/40 text-xs truncate">{p.jobTitle || p.department || 'Team Member'}</p>
                    </div>
                    <span className="ml-auto text-lg flex-shrink-0">🎉</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Anniversaries */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-display font-bold text-white">Work Anniversaries</h3>
                {!loading && <p className="text-white/40 text-xs">{anniversaries.length} milestone{anniversaries.length !== 1 ? 's' : ''}</p>}
              </div>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[1, 2].map(i => <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />)}
              </div>
            ) : anniversaries.length === 0 ? (
              <p className="text-white/30 text-sm py-4 text-center">No work anniversaries today 🌟</p>
            ) : (
              <div className="space-y-3">
                {anniversaries.map(p => (
                  <div key={p.employeeId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Avatar name={p.name} photoUrl={p.photoUrl} />
                    <div className="min-w-0">
                      <p className="font-body font-semibold text-white text-sm truncate">{p.name}</p>
                      <p className="text-white/40 text-xs truncate">{p.jobTitle || p.department || 'Team Member'}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0 text-right">
                      <span className="font-display font-bold text-amber-400 text-lg">{p.years}</span>
                      <p className="text-white/30 text-[10px]">years</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
