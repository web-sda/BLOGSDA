import { getAllPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'

const BASE = 'https://blog.segredosdaaudiencia.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...posts.map(p => ({
      url: `${BASE}/posts/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
