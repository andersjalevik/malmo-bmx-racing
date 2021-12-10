import React from 'react'
import { Link } from 'gatsby'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


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

const links = [
  {name: 'Välkommen', url:'/'},
  {name: 'Nyheter', url:'/blog'},
  {name: 'Träning', url:'/traning'},
  {name: 'Frågor', url:'/faq'},
  {name: 'Tävling', url:'/tavling'},
]
const Navbar = ({location})=> {
  const path = location?.pathname

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
      {links.map(({name, url}) => {
        const selected =  url === '/' ? path === url : path.indexOf(url) > -1

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
  </Box>
  )
}

const MobileMenu = ({location}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{margin: 2}}>
      <Button
        variant="outlined" startIcon={<MenuIcon />}
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
          Meny
        </Button>
      
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
    
      <Box sx={{display: {xs: 'inherit', sm: 'none'}}}><MobileMenu location={location}/></Box>
      <Box sx={{display: {xs: 'none', sm: 'inherit'}}}><Navbar location={location}/></Box>
      
    </div>
  )
}

export default Adaptive