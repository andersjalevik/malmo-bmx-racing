import Layout from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout pathname="/404">
      <h1>404 - Sidan hittades inte</h1>
      <p>Tyvärr kunde vi inte hitta sidan du letade efter.</p>
    </Layout>
  )
}
