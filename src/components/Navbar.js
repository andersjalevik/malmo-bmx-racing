import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const useWindowWidth = (initialState = "100%") => {
  const [windowWidth, setWindowWidth] = useState(initialState);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}


const links = [
  {name: 'Välkommen', url:'/'},
  {name: 'Nyheter', url:'/blog'},
  {name: 'Träning', url:'/traning'},
  {name: 'Frågor', url:'/faq'},
  {name: 'Tävling', url:'/tavling'},
  {name: 'Styrelse', url:'/styrelse'},
  {name: 'Länkar', url:'/lankar'},
]

const StyledLink = styled(Link)(
  () => `
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
`,
);


const MobileMenu = ({location, links}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
    } else {
      handleClose()
    }
  };

  return (
    <Box sx={{
      padding: '16px',
      ".MuiSvgIcon-root": {
        color: 'white',
      },
      ":hover": {
         backgroundColor: 'white',
         ".MuiSvgIcon-root": {
          color: 'inherit',
        } 
      },
    }}
       onClick={handleClick}
    >
      <MenuIcon/>
      
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
          style: {padding: 0}
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
            margin: 0,
            padding: 0,
          },
        }}
      >
        {links.map((link) => (
          <MenuItem style={{padding: 0, margin: 0}}key={link.name} selected={false} onClick={handleClose}>
            <Link style={{padding: '8px 12px 8px 12px', width: '100%'}} to={link.url}>{link.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

const Navbar = ({location})=> {
  const path = location?.pathname
  const windowWidth = useWindowWidth()
  console.log(windowWidth)
  let numberOfTabs = 5
  if (windowWidth > 460 && windowWidth <= 600) {
    numberOfTabs = 4
  }
  if (windowWidth > 380 && windowWidth <= 460) {
    numberOfTabs = 3
  }
  if (windowWidth > 300 && windowWidth <= 380) {
    numberOfTabs = 2
  }
  if (windowWidth <= 300) {
    numberOfTabs = 1
  }

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
      {navbarLinks.map(({name, url}) => {
        const selected =  url === '/' ? path === url : path && path.indexOf(url) > -1

        return (    
        <StyledLink sx={{
          flexGrow: 1,
          textAlign: 'center',
          backgroundColor: selected ? 'white' : 'inherit',
          color: selected ? '#08354e' : 'white',
          borderBottomColor: selected ? 'white' : '#08354e',
        }} to={url}>
          {name}
        </StyledLink>
      )})}
      <Box sx={{
          flexGrow: 1,
          textAlign: 'center',
          backgroundColor: 'inherit',
          color:  'white',
          borderBottom: '3px solid #08354e',
          ":hover" : {
            borderBottom: '3px solid white !important'
          },

        }}>
        <MobileMenu location={location} links={menuLinks} />
      </Box>
      
  </Box>
  )
}

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl,
*/
const Adaptive = ({location}) => {
  return (
    <div>
      <Navbar location={location}/>

    {/* 
      <Box sx={{display: {xs: 'inherit', sm: 'none'}}}><MobileMenu location={location}/></Box>
      <Box sx={{display: {xs: 'none', sm: 'inherit'}}}><Navbar location={location}/></Box>
      */}
    </div>
  )
}

export default Adaptive