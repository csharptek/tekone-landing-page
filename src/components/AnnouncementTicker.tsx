const MOCK_NOTICES = [
  "Q2 Appraisal cycle begins April 2026 — watch for your manager's calendar invite",
  "Please use TekOne going ahead. Update emergency contact details in TekOne",
  "Health insurance renewal by April 25th",
]

export default function AnnouncementTicker() {
  const text = MOCK_NOTICES.join('   ···   ')
  return (
    <div className="bg-brand-600 py-2.5 overflow-hidden">
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6">
        <span className="flex-shrink-0 bg-white text-brand-600 text-[10px] font-display font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
          Sample Notices
        </span>
        <div className="overflow-hidden flex-1">
          <p className="animate-ticker whitespace-nowrap text-white/90 text-sm font-body cursor-default select-none">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
