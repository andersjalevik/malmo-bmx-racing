import fs from 'fs'
import path from 'path'
import { parseMarkdown } from './markdown'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostData {
  slug: string
  title: string
  date: string
  image?: string
  tags?: string[]
  content: string
  excerpt: string
}

export interface PostMetadata {
  slug: string
  title: string
  date: string
  image?: string
  tags?: string[]
  excerpt: string
}

function generateExcerpt(content: string, maxLength: number = 200): string {
  // Strip HTML tags and get plain text
  const plainText = content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  if (plainText.length <= maxLength) return plainText
  return plainText.slice(0, maxLength).trim() + '...'
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { content, data } = await parseMarkdown(fileContents)

        return {
          slug,
          title: data.title as string,
          date: data.date as string,
          image: data.image as string | undefined,
          tags: data.tags as string[] | undefined,
          excerpt: generateExcerpt(content),
        }
      })
  )

  // Sort by date descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = await parseMarkdown(fileContents)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    image: data.image as string | undefined,
    tags: data.tags as string[] | undefined,
    content,
    excerpt: generateExcerpt(content),
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tagsSet = new Set<string>()

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagsSet.add(tag))
    }
  })

  return Array.from(tagsSet).sort()
}

export async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
  const posts = await getAllPosts()
  return posts.filter((post) =>
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs.readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}
