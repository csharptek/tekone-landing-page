import type { Announcement } from '../types'

const MOCK: Announcement[] = [
  { id:'1', title:'Appraisal Cycle Q2 2026', body:'The Q2 appraisal cycle kicks off May 1st. All managers are requested to complete goal-setting discussions with their teams before April 30th.', date:'2026-04-10', category:'HR' },
  { id:'2', title:'Health Insurance Renewal', body:'Group health insurance renewal is due. Please verify your nominee details in TekOne and submit any changes by April 25th.', date:'2026-04-08', category:'Benefits' },
  { id:'3', title:'New Leave Policy — Effective May 1', body:'Updated leave policy with enhanced carry-forward rules for Planned Leave is now active. Review the policy document in TekOne.', date:'2026-04-05', category:'Policy' },
  { id:'4', title:'Office WiFi Maintenance', body:'Scheduled WiFi maintenance on April 20th from 10pm to 12am. Plan accordingly if working late.', date:'2026-04-03', category:'IT' },
]

const CAT: Record<string,string> = {
  HR:       'bg-blue-100 text-blue-700',
  Benefits: 'bg-emerald-100 text-emerald-700',
  Policy:   'bg-purple-100 text-purple-700',
  IT:       'bg-amber-100 text-amber-700',
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
}

export default function AnnouncementsSection() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-900">Announcements</h2>
            <p className="text-brand-600/50 text-sm mt-0.5 font-body">Company-wide notices</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-amber-100 text-amber-700 font-display font-semibold px-3 py-1.5 rounded-full border border-amber-200">
            ⚠️ Sample Data — Admin panel coming soon
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK.map((a, i) => (
            <div
              key={a.id}
              className="card card-hover rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 animate-fade-in-up cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full ${CAT[a.category] || 'bg-gray-100 text-gray-600'}`}>
                  {a.category}
                </span>
                <span className="text-brand-600/40 text-xs font-body flex-shrink-0">{fmt(a.date)}</span>
              </div>
              <h3 className="font-display font-semibold text-brand-900 text-sm leading-snug">{a.title}</h3>
              <p className="text-brand-700/60 text-xs font-body leading-relaxed line-clamp-3">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
