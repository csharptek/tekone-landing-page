import type { NewsItem } from '../types'

const MOCK: NewsItem[] = [
  {
    id: '1',
    title: 'CSharpTek Onboards 3 New Enterprise Clients in Q1',
    summary: 'The sales team closed three major enterprise accounts in Q1, taking total ARR past a significant milestone. Details shared in the all-hands meeting recording.',
    date: '2026-04-12',
    tag: 'Business',
  },
  {
    id: '2',
    title: 'TekOne Payroll Module Goes Live for All Entities',
    summary: 'After months of development and testing, TekOne\'s payroll module is now live across all company entities. Employee payslips are now generated automatically.',
    date: '2026-04-09',
    tag: 'Product',
  },
  {
    id: '3',
    title: 'Team Building Day — Recap & Photos',
    summary: 'Last week\'s team outing was a huge success. Over 40 employees participated in activities at the venue. Photos are now shared in the company Teams channel.',
    date: '2026-04-02',
    tag: 'Culture',
  },
]

const TAG_COLORS: Record<string, string> = {
  Business: 'text-emerald-400',
  Product: 'text-blue-400',
  Culture: 'text-pink-400',
  Technology: 'text-purple-400',
  HR: 'text-amber-400',
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

export default function NewsSection() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-xl text-white">Company News</h2>
            <p className="text-white/40 text-sm mt-0.5">What's happening at CSharpTek</p>
          </div>
          <span className="text-white/20 text-xs font-body italic">Sample data · Admin panel coming soon</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {MOCK.map((item, i) => (
            <article
              key={item.id}
              className="glass glass-hover rounded-xl overflow-hidden transition-all duration-200 animate-fade-in-up cursor-default group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Color bar */}
              <div className={`h-1 w-full ${
                item.tag === 'Business' ? 'bg-gradient-to-r from-emerald-500 to-emerald-700' :
                item.tag === 'Product' ? 'bg-gradient-to-r from-blue-500 to-blue-700' :
                'bg-gradient-to-r from-pink-500 to-pink-700'
              }`} />

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-display font-bold tracking-wide ${TAG_COLORS[item.tag] || 'text-white/50'}`}>
                    {item.tag.toUpperCase()}
                  </span>
                  <span className="text-white/30 text-xs font-body">{formatDate(item.date)}</span>
                </div>

                <h3 className="font-display font-semibold text-white text-sm leading-snug group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/50 text-xs font-body leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
