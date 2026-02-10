'use client'

import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Navbar from './Navbar'
import Footer from './Footer'

// Map of top images - these correspond to the images in public/img/top/
const topImages: Record<string, string> = {
  image1: '/img/top/top_turn.jpg',
  image2: '/img/top/top_focus.jpg',
  image3: '/img/top/top_friends.jpg',
  image4: '/img/top/top_jump.jpg',
  image5: '/img/top/top_flight.jpg',
  image6: '/img/top/top_walk.jpg',
}

interface LayoutProps {
  children: React.ReactNode
  topImage?: string
  pathname?: string
}

export default function Layout({ children, topImage = 'image6', pathname }: LayoutProps) {
  const imageSrc = topImages[topImage] || topImages.image6

  return (
    <Paper
      elevation={3}
      sx={{
        margin: 'auto',
        maxWidth: 900,
        marginTop: { xs: 0, sm: 0, md: 6 },
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Malmö BMX Racing"
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          maxHeight: 300,
          objectFit: 'cover',
          objectPosition: 'center bottom',
        }}
      />
      <Navbar pathname={pathname} />
      <Box
        sx={{
          paddingLeft: { xs: 2, sm: 4, md: 6 },
          paddingRight: { xs: 2, sm: 4, md: 6 },
          paddingTop: 2,
          paddingBottom: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Paper>
  )
}
