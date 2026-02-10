import { Metadata } from 'next'
import Layout from '@/components/Layout'
import { getPageContent, siteMetadata } from '@/lib/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent('kalender')
  return {
    title: page?.title ? `${page.title} | ${siteMetadata.title}` : siteMetadata.title,
    description: page?.description || siteMetadata.description,
  }
}

export default async function KalenderPage() {
  const page = await getPageContent('kalender')

  return (
    <Layout topImage={page?.topImage || 'image5'} pathname="/kalender">
      <h1>{page?.title || 'Kalender'}</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FStockholm&mode=AGENDA&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=1&showTz=0&showNav=0&title&src=Zmdpbm5nYmhjbXA2aHRiNHE3a3FjbTE0Z2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
        style={{ borderWidth: 0 }}
        width="100%"
        height="599"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      />
    </Layout>
  )
}
