const TEKONE_URL = import.meta.env.VITE_TEKONE_APP_URL || 'https://tekpayroll2026.vercel.app'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-4">
          {/* CSharpTek logo */}
          <img
            src="/csharptek-logo.png"
            alt="CSharpTek"
            className="h-8 w-auto object-contain"
            style={{ maxWidth: 160 }}
          />

          <div className="w-px h-6 bg-blue-200" />

          {/* TekOne wordmark */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-xs">T1</span>
            </div>
            <span className="font-display font-bold text-brand-800 text-lg tracking-tight">
              Tek<span className="text-brand-600">One</span>
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-brand-600/60 text-xs font-body">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Intranet Portal
          </div>
          <a
            href={TEKONE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-display font-semibold transition-all duration-200 shadow-md shadow-brand-200 hover:-translate-y-0.5"
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
