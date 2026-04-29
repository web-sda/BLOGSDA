export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="font-semibold text-white text-sm">
          <span className="text-red-500">SDA</span> Blog
        </p>
        <p className="text-xs">
          © {year} Segredos da Audiência. Todos os direitos reservados.
        </p>
        <p className="text-xs">
          <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          <span className="mx-2">·</span>
          <a href="https://segredosdaaudiencia.com.br" className="hover:text-white transition-colors">Site Principal</a>
        </p>
      </div>
    </footer>
  )
}
