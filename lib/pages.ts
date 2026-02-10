import fs from 'fs'
import path from 'path'
import { parseMarkdown } from './markdown'

const pagesDirectory = path.join(process.cwd(), 'content/pages')

export interface PageData {
  title: string
  description?: string
  topImage?: string
  content: string
}

export async function getPageContent(pageName: string): Promise<PageData | null> {
  const fullPath = path.join(pagesDirectory, `${pageName}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = await parseMarkdown(fileContents)

  return {
    title: data.title as string,
    description: data.description as string | undefined,
    topImage: data.topImage as string | undefined,
    content,
  }
}

export const siteMetadata = {
  title: 'Malmö BMX Racing',
  description: 'Välkommen till Malmö BMX Racing!',
}
