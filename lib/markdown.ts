import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import matter from 'gray-matter'

export interface MarkdownContent {
  content: string
  data: Record<string, unknown>
}

export async function parseMarkdown(fileContent: string): Promise<MarkdownContent> {
  const { content, data } = matter(fileContent)

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content)

  return {
    content: processedContent.toString(),
    data,
  }
}
