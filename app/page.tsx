import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Segredos da Audiência',
  description: 'Estratégias, dicas e insights para crescer sua audiência e escalar seu negócio digital.',
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
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

      <section className="max-w-6xl mx-auto px-4 py-14">
        {posts.length === 0 ? (
          <div className="text-center text-gray-400 py-24">
            <p className="text-5xl mb-4">✍️</p>
            <p className="text-xl font-medium text-gray-600">Em breve, novos conteúdos!</p>
            <p className="text-sm mt-2">Estamos preparando algo incrível para você.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Últimos artigos
              <span className="ml-2 text-sm font-normal text-gray-400">({posts.length})</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
