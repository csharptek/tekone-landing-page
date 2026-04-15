const TEKONE_URL = import.meta.env.VITE_TEKONE_APP_URL || 'https://tekpayroll2026.vercel.app'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-4">
          {/* CSharpTek logo placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">C#</span>
            </div>
            <span className="font-display font-semibold text-white/80 text-sm hidden sm:block">CSharpTek</span>
          </div>

          <div className="w-px h-6 bg-white/20" />

          {/* TekOne logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">T1</span>
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Tek<span className="text-gradient">One</span>
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-white/50 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Intranet Portal
          </div>
          <a
            href={TEKONE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-display font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In to TekOne
          </a>
        </div>
      </div>
    </header>
  )
}
