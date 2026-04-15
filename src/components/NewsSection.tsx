import type { NewsItem } from '../types'

const MOCK: NewsItem[] = [
  { id:'1', title:'CSharpTek Onboards 3 New Enterprise Clients in Q1', summary:'The sales team closed three major enterprise accounts in Q1, taking total ARR past a significant milestone. Details shared in the all-hands meeting recording.', date:'2026-04-12', tag:'Business' },
  { id:'2', title:'TekOne Payroll Module Goes Live for All Entities', summary:'After months of development and testing, TekOne\'s payroll module is now live across all company entities. Employee payslips are now generated automatically.', date:'2026-04-09', tag:'Product' },
  { id:'3', title:'Team Building Day — Recap & Photos', summary:'Last week\'s team outing was a huge success. Over 40 employees participated in activities. Photos are now shared in the company Teams channel.', date:'2026-04-02', tag:'Culture' },
]

const TAG: Record<string,{ bg:string; text:string; bar:string }> = {
  Business: { bg:'bg-emerald-100', text:'text-emerald-700', bar:'bg-emerald-500' },
  Product:  { bg:'bg-blue-100',    text:'text-blue-700',    bar:'bg-blue-500'    },
  Culture:  { bg:'bg-rose-100',    text:'text-rose-700',    bar:'bg-rose-500'    },
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short' })
}

export default function NewsSection() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display font-bold text-xl text-brand-900">Company News</h2>
            <p className="text-brand-600/50 text-sm mt-0.5 font-body">What's happening at CSharpTek</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-amber-100 text-amber-700 font-display font-semibold px-3 py-1.5 rounded-full border border-amber-200">
            ⚠️ Sample Data — Admin panel coming soon
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {MOCK.map((item, i) => {
            const t = TAG[item.tag] || TAG.Business
            return (
              <article
                key={item.id}
                className="card card-hover rounded-xl overflow-hidden transition-all duration-200 animate-fade-in-up cursor-default group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`h-1 w-full ${t.bar}`} />
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-display font-bold tracking-wide px-2.5 py-1 rounded-full ${t.bg} ${t.text}`}>
                      {item.tag.toUpperCase()}
                    </span>
                    <span className="text-brand-600/40 text-xs font-body">{fmt(item.date)}</span>
                  </div>
                  <h3 className="font-display font-semibold text-brand-900 text-sm leading-snug group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-700/60 text-xs font-body leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
