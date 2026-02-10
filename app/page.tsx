import { Metadata } from 'next'
import Layout from '@/components/Layout'
import HTMLContent from '@/components/HTMLContent'
import { getPageContent, siteMetadata } from '@/lib/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent('index')
  return {
    title: page?.title || siteMetadata.title,
    description: page?.description || siteMetadata.description,
  }
}

export default async function HomePage() {
  const page = await getPageContent('index')

  if (!page) {
    return (
      <Layout topImage="image1" pathname="/">
        <h1>Välkommen till Malmö BMX Racing!</h1>
        <p>Innehållet kunde inte laddas.</p>
      </Layout>
    )
  }

  return (
    <Layout topImage={page.topImage} pathname="/">
      <h1>{page.title}</h1>
      <HTMLContent content={page.content} />
    </Layout>
  )
}
