import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  description: string
  keywords: string[]
  date: string
  author: string
  readingTime: string
  coverImage?: string
  published: boolean
}

export interface Post extends PostMeta {
  content: string
}

function calcReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const mins = Math.ceil(words / 200)
  return `${mins} min de leitura`
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter(f => /\.(mdx|md)$/.test(f))

  return files
    .map(filename => {
      const slug = filename.replace(/\.(mdx|md)$/, '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title || 'Sem título',
        description: data.description || '',
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
        date: data.date ? String(data.date) : new Date().toISOString().slice(0, 10),
        author: data.author || 'Equipe SDA',
        readingTime: calcReadingTime(content),
        coverImage: data.coverImage || undefined,
        published: data.published !== false,
      } as PostMeta
    })
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const candidates = [
    path.join(postsDir, `${slug}.mdx`),
    path.join(postsDir, `${slug}.md`),
  ]
  const fullPath = candidates.find(p => fs.existsSync(p))
  if (!fullPath) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title || 'Sem título',
    description: data.description || '',
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    date: data.date ? String(data.date) : new Date().toISOString().slice(0, 10),
    author: data.author || 'Equipe SDA',
    readingTime: calcReadingTime(content),
    coverImage: data.coverImage || undefined,
    published: data.published !== false,
    content,
  }
}
