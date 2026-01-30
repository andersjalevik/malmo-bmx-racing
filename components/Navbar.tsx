'use client'

import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'

const links = [
  { name: 'Välkommen', url: '/' },
  { name: 'Nyheter', url: '/blog' },
  { name: 'Kalender', url: '/kalender' },
  { name: 'Träning', url: '/traning' },
  { name: 'Frågor', url: '/faq' },
  { name: 'Tävling', url: '/tavling' },
  { name: 'Länkar', url: '/lankar' },
  { name: 'Admin', url: 'https://www.malmobmxracing.se/admin/' },
]

const StyledLink = styled(Link)(
  () => `
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 16px;
  border-bottom: 3px solid #08354e;
  :hover {
    background-color: white;
    color: #12628e; !important
    text-decoration: none;
    border-bottom: 3px solid white !important;
  }
`
)

interface MobileMenuProps {
  links: typeof links
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!open) {
      setAnchorEl(event.currentTarget)
    } else {
      handleClose()
    }
  }

  return (
    <Box
      sx={{
        padding: '16px',
        '.MuiSvgIcon-root': {
          color: 'white',
        },
        ':hover': {
          backgroundColor: 'white',
          '.MuiSvgIcon-root': {
            color: 'inherit',
          },
        },
      }}
      onClick={handleClick}
    >
      <MenuIcon />

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
          style: { padding: 0 },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: '20ch',
              margin: 0,
              padding: 0,
            },
          },
        }}
      >
        {links.map((link) => (
          <MenuItem
            style={{ padding: 0, margin: 0 }}
            key={link.name}
            selected={false}
            onClick={handleClose}
          >
            <Link
              style={{
                padding: '8px 12px 8px 12px',
                width: '100%',
                textDecoration: 'none',
              }}
              href={link.url}
            >
              {link.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

interface NavbarInnerProps {
  pathname?: string
  numberOfTabs: number
}

const NavbarInner = ({ pathname, numberOfTabs }: NavbarInnerProps) => {
  const path = pathname

  const navbarLinks = links.slice(0, numberOfTabs)
  const menuLinks = links.slice(numberOfTabs, links.length)

  return (
    <Box
      role="navigation"
      aria-label="main-navigation"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#12628e',
      }}
    >
      {navbarLinks.map(({ name, url }) => {
        const selected =
          url === '/' ? path === url : path && path.indexOf(url) > -1

        return (
          <StyledLink
            key={name}
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              backgroundColor: selected ? 'white' : 'inherit',
              color: selected ? '#08354e' : 'white',
              borderBottomColor: selected ? 'white' : '#08354e',
            }}
            href={url}
          >
            {name}
          </StyledLink>
        )
      })}
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          backgroundColor: 'inherit',
          color: 'white',
          borderBottom: '3px solid #08354e',
          ':hover': {
            borderBottom: '3px solid white !important',
          },
        }}
      >
        <MobileMenu links={menuLinks} />
      </Box>
    </Box>
  )
}

interface NavbarProps {
  pathname?: string
}

export default function Navbar({ pathname }: NavbarProps) {
  return (
    <div>
      <Box sx={{ display: { xs: 'inherit', sm: 'none' } }}>
        <NavbarInner pathname={pathname} numberOfTabs={2} />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'inherit' } }}>
        <NavbarInner pathname={pathname} numberOfTabs={5} />
      </Box>
    </div>
  )
}
