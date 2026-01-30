import { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllTags } from '@/lib/posts'
import { siteMetadata } from '@/lib/pages'

export const metadata: Metadata = {
  title: `Tags | ${siteMetadata.title}`,
  description: 'Alla tags på Malmö BMX Racing',
}

function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export default async function TagsPage() {
  const tags = await getAllTags()

  return (
    <Layout pathname="/tags">
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
