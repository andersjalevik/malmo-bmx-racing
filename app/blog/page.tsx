import { Metadata } from 'next'
import Layout from '@/components/Layout'
import BlogRoll from '@/components/BlogRoll'
import { getAllPosts } from '@/lib/posts'
import { siteMetadata } from '@/lib/pages'

export const metadata: Metadata = {
  title: `Nyheter | ${siteMetadata.title}`,
  description: 'Senaste nyheterna från Malmö BMX Racing',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Layout topImage="image2" pathname="/blog">
      <h1>Nyheter</h1>
      <BlogRoll posts={posts} />
    </Layout>
  )
}
