const MOCK_ANNOUNCEMENTS = [
  '📢 Q2 Appraisal cycle begins May 1st — watch for your manager\'s calendar invite',
  '🏢 Office will be closed on May 1st for Labour Day',
  '📋 Please update your emergency contact details in TekOne by April 30th',
  '🎉 Congratulations to the Engineering team for completing Project Phoenix on time!',
  '🩺 Health insurance renewal forms due by April 25th — check your email for details',
  '💻 IT helpdesk hours: Monday–Friday 9am to 6pm IST',
]

export default function AnnouncementTicker() {
  const text = MOCK_ANNOUNCEMENTS.join('   •••   ')

  return (
    <div className="bg-blue-900/30 border-y border-blue-500/20 py-2.5 overflow-hidden">
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6">
        <span className="flex-shrink-0 bg-blue-600 text-white text-xs font-display font-bold px-3 py-1 rounded-full tracking-wide">
          NOTICES
        </span>
        <div className="overflow-hidden flex-1">
          <p className="animate-ticker whitespace-nowrap text-blue-200/80 text-sm font-body cursor-default">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
