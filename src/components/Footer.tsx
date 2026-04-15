export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-8 border-t border-blue-100 bg-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/csharptek-logo.png" alt="CSharpTek" className="h-6 w-auto object-contain opacity-60" />
        </div>
        <p className="text-brand-600/30 text-xs font-body text-center">
          © {year} CSharpTek. Internal use only. · Powered by TekOne
        </p>
        <div className="flex items-center gap-1.5 text-brand-600/30 text-xs font-body">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          tekone.csharptek.com
        </div>
      </div>
    </footer>
  )
}
