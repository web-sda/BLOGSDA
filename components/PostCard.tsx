import { PostMeta } from '@/lib/posts'

export default function PostCard({ post }: { post: PostMeta }) {
  const dateFormatted = new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 group flex flex-col">
      <a href={`/posts/${post.slug}`} className="flex flex-col flex-1 p-6">
        {post.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.keywords.slice(0, 3).map(kw => (
              <span key={kw} className="bg-red-50 text-red-700 text-xs font-medium px-2 py-0.5 rounded-full border border-red-100">
                {kw}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors leading-snug flex-1">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
            {post.description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 mt-auto">
          <span>{dateFormatted}</span>
          <span>{post.readingTime}</span>
        </div>
      </a>
    </article>
  )
}
