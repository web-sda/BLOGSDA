import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Segredos da Audiência',
  description: 'Estratégias, dicas e insights para crescer sua audiência e escalar seu negócio digital.',
}

export default function HomePage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <div>
      {featured ? (
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-6">
              ✦ Post em destaque
            </p>
            <a href={`/posts/${featured.slug}`} className="group block">
              <div className="max-w-3xl">
                {featured.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.keywords.slice(0, 3).map(kw => (
                      <span
                        key={kw}
                        className="bg-red-950/60 text-red-300 text-xs font-medium px-3 py-1 rounded-full border border-red-800/40"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight group-hover:text-red-400 transition-colors duration-200">
                  {featured.title}
                </h1>
                {featured.description && (
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {featured.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mb-10">
                  <span className="text-slate-400">{featured.author}</span>
                  <span>·</span>
                  <span>
                    {new Date(featured.date + 'T12:00:00').toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span>·</span>
                  <span>{featured.readingTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 bg-red-600 group-hover:bg-red-700 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
                  Ler artigo completo
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </div>
            </a>
          </div>
        </section>
      ) : (
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Segredos da <span className="text-red-500">Audiência</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Estratégias comprovadas para crescer sua audiência, aumentar o engajamento e escalar seu negócio digital.
            </p>
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-4 py-14">
        {posts.length === 0 ? (
          <div className="text-center text-gray-400 py-24">
            <p className="text-5xl mb-4">✍️</p>
            <p className="text-xl font-medium text-gray-600">Em breve, novos conteúdos!</p>
            <p className="text-sm mt-2">Estamos preparando algo incrível para você.</p>
          </div>
        ) : rest.length > 0 ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-bold text-slate-900">Mais artigos</h2>
              <span className="text-sm text-gray-400 font-normal">({rest.length})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        ) : null}
      </section>
    </div>
  )
}
