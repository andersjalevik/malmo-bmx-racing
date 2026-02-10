import { Metadata } from 'next'
import Layout from '@/components/Layout'
import HTMLContent from '@/components/HTMLContent'
import { getPageContent, siteMetadata } from '@/lib/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent('arbetsgrupper')
  return {
    title: page?.title ? `${page.title} | ${siteMetadata.title}` : siteMetadata.title,
    description: page?.description || siteMetadata.description,
  }
}

export default async function ArbetsgrupperPage() {
  const page = await getPageContent('arbetsgrupper')

  if (!page) {
    return (
      <Layout topImage="image4" pathname="/arbetsgrupper">
        <h1>Arbetsgrupper</h1>
        <p>Innehållet kunde inte laddas.</p>
      </Layout>
    )
  }

  return (
    <Layout topImage={page.topImage} pathname="/arbetsgrupper">
      <h1>{page.title}</h1>
      <HTMLContent content={page.content} />
    </Layout>
  )
}
