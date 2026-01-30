import { Metadata } from 'next'
import Layout from '@/components/Layout'
import HTMLContent from '@/components/HTMLContent'
import { getPageContent, siteMetadata } from '@/lib/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent('styrelse')
  return {
    title: page?.title ? `${page.title} | ${siteMetadata.title}` : siteMetadata.title,
    description: page?.description || siteMetadata.description,
  }
}

export default async function StyrelsePage() {
  const page = await getPageContent('styrelse')

  if (!page) {
    return (
      <Layout topImage="image6" pathname="/styrelse">
        <h1>Styrelse</h1>
        <p>Innehållet kunde inte laddas.</p>
      </Layout>
    )
  }

  return (
    <Layout topImage={page.topImage} pathname="/styrelse">
      <h1>{page.title}</h1>
      <HTMLContent content={page.content} />
    </Layout>
  )
}
