import { useBirthdays } from '../hooks/usePublicData'

function Avatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const palette = ['from-blue-400 to-blue-600','from-violet-400 to-violet-600','from-emerald-400 to-emerald-600','from-rose-400 to-rose-600','from-amber-400 to-amber-600']
  const color = palette[name.charCodeAt(0) % palette.length]
  if (photoUrl) {
    return <img src={photoUrl} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-blue-100" />
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
          <div className="card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎂</span>
                <div>
                  <h3 className="font-display font-bold text-brand-900">Birthdays Today</h3>
                  <p className="text-brand-600/50 text-xs font-body flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Live from TekOne
                  </p>
                </div>
              </div>
            </div>
            {loading ? (
              <div className="space-y-3">{[1,2].map(i=><div key={i} className="h-12 bg-blue-50 rounded-lg animate-pulse"/>)}</div>
            ) : birthdays.length === 0 ? (
              <p className="text-brand-600/30 text-sm py-4 text-center">No birthdays today 🎈</p>
            ) : (
              <div className="space-y-2">
                {birthdays.map(p => (
                  <div key={p.employeeId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Avatar name={p.name} photoUrl={p.photoUrl} />
                    <div className="min-w-0">
                      <p className="font-body font-semibold text-brand-900 text-sm truncate">{p.name}</p>
                      <p className="text-brand-600/50 text-xs truncate">{p.jobTitle || p.department || 'Team Member'}</p>
                    </div>
                    <span className="ml-auto text-lg flex-shrink-0">🎉</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Anniversaries */}
          <div className="card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <h3 className="font-display font-bold text-brand-900">Work Anniversaries</h3>
                  <p className="text-brand-600/50 text-xs font-body flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Live from TekOne
                  </p>
                </div>
              </div>
            </div>
            {loading ? (
              <div className="space-y-3">{[1,2].map(i=><div key={i} className="h-12 bg-blue-50 rounded-lg animate-pulse"/>)}</div>
            ) : anniversaries.length === 0 ? (
              <p className="text-brand-600/30 text-sm py-4 text-center">No work anniversaries today 🌟</p>
            ) : (
              <div className="space-y-2">
                {anniversaries.map(p => (
                  <div key={p.employeeId} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Avatar name={p.name} photoUrl={p.photoUrl} />
                    <div className="min-w-0">
                      <p className="font-body font-semibold text-brand-900 text-sm truncate">{p.name}</p>
                      <p className="text-brand-600/50 text-xs truncate">{p.jobTitle || p.department || 'Team Member'}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0 text-right">
                      <span className="font-display font-bold text-amber-500 text-lg">{p.years}</span>
                      <p className="text-brand-600/40 text-[10px]">years</p>
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
