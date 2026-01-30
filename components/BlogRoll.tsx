'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import type { PostMetadata } from '@/lib/posts'

interface BlogRollProps {
  posts: PostMetadata[]
}

export default function BlogRoll({ posts }: BlogRollProps) {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.slug}>
            <Box sx={{ display: 'flex', marginBottom: 8, marginTop: 4 }}>
              <Box sx={{ width: '32%' }}>
                {post.image ? (
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                ) : (
                  <Box sx={{ height: '100%' }} />
                )}
              </Box>
              <Box sx={{ width: '2%' }} />
              <Box sx={{ width: '62%' }}>
                <h2 style={{ marginTop: 0 }}>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}/`}>Läs mer</Link>
              </Box>
            </Box>
          </div>
        ))}
    </div>
  )
}
