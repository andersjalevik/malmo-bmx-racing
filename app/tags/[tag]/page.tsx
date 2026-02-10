import { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTags, getPostsByTag } from '@/lib/posts'
import { siteMetadata } from '@/lib/pages'

interface PageProps {
  params: Promise<{ tag: string }>
}

function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({ tag: kebabCase(tag) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  return {
    title: `${tag} | ${siteMetadata.title}`,
    description: `Posts tagged with "${tag}"`,
  }
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  // Find the original tag (with proper casing) from all tags
  const allTags = await getAllTags()
  const originalTag = allTags.find((t) => kebabCase(t) === tag) || tag
  const posts = await getPostsByTag(originalTag)

  const tagHeader = `${posts.length} post${posts.length === 1 ? '' : 's'} tagged with "${originalTag}"`

  return (
    <Layout pathname={`/tags/${tag}`}>
      <section className="section">
        <div className="container content">
          <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
          <ul className="taglist">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}/`}>
                  <h2 className="is-size-2">{post.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/tags/">Browse all tags</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
