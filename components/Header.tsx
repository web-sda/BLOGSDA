export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-bold text-white text-lg">
            <span className="text-red-500">SDA</span>
            <span className="text-slate-400 font-normal text-sm ml-1.5">Blog</span>
          </span>
        </a>
        <a
          href="https://segredosdaaudiencia.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white text-sm transition-colors hidden sm:block"
        >
          segredosdaaudiencia.com.br →
        </a>
      </div>
    </header>
  )
}
