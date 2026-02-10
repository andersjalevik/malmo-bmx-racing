import { Metadata } from 'next'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Layout from '@/components/Layout'
import HTMLContent from '@/components/HTMLContent'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { siteMetadata } from '@/lib/pages'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: siteMetadata.title }
  }

  return {
    title: `Nyheter: ${post.title} | ${siteMetadata.title}`,
    description: post.excerpt,
  }
}

function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout topImage="image2" pathname={`/blog/${slug}`}>
      <section className="section">
        <div>
          <h1>{post.title}</h1>
        </div>
        <div>
          {post.image && (
            <Box
              sx={{
                width: { xs: '100%', sm: '45%', md: '45%' },
                float: { xs: 'inherit', sm: 'right', md: 'right' },
                margin: { xs: '0', sm: '0 0 1em 2em', md: '0 0 1em 2em' },
              }}
            >
              <Box
                component="img"
                src={post.image}
                alt={post.title}
                sx={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          )}

          <HTMLContent content={post.content} />

          {post.tags && post.tags.length > 0 && (
            <div>
              <h4>Tags</h4>
              <ul>
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <Link href={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
