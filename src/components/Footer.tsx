export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-8 border-t border-white/5 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xs">T1</span>
          </div>
          <span className="font-display font-semibold text-white/60 text-sm">TekOne Intranet</span>
        </div>
        <p className="text-white/25 text-xs font-body text-center">
          © {year} CSharpTek. Internal use only. · Powered by TekOne
        </p>
        <div className="flex items-center gap-1.5 text-white/25 text-xs font-body">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          tekone.csharptek.com
        </div>
      </div>
    </footer>
  )
}
