import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post não encontrado' }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
  }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const dateFormatted = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        {post.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.keywords.map(kw => (
              <span key={kw} className="bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full border border-red-100">
                {kw}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            {post.description}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-4">
          <span>✍️ {post.author}</span>
          <span>📅 {dateFormatted}</span>
          <span>⏱️ {post.readingTime}</span>
        </div>
      </header>

      <div className="prose-blog">
        <MDXRemote source={post.content} />
      </div>

      <footer className="mt-14 pt-6 border-t border-gray-200">
        <a href="/" className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors">
          ← Voltar ao Blog
        </a>
      </footer>
    </article>
  )
}
