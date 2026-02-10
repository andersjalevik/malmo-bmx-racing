import { Metadata } from 'next'
import Layout from '@/components/Layout'
import HTMLContent from '@/components/HTMLContent'
import { getPageContent, siteMetadata } from '@/lib/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent('tavling')
  return {
    title: page?.title ? `${page.title} | ${siteMetadata.title}` : siteMetadata.title,
    description: page?.description || siteMetadata.description,
  }
}

export default async function TavlingPage() {
  const page = await getPageContent('tavling')

  if (!page) {
    return (
      <Layout topImage="image5" pathname="/tavling">
        <h1>Tävling</h1>
        <p>Innehållet kunde inte laddas.</p>
      </Layout>
    )
  }

  return (
    <Layout topImage={page.topImage} pathname="/tavling">
      <h1>{page.title}</h1>
      <HTMLContent content={page.content} />
    </Layout>
  )
}
