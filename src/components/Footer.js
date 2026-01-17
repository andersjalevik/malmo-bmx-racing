import React from 'react'
import { styled } from "@mui/material/styles";
// import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Header>
        Sammarbetspartners:
        </Header>
        <Row>
<a href='https://mvbab.se/' target='_blank'><Logo src='/img/logo_mvb.png' /></a>
        <a href='https://www.lyft-byggmaskiner.se/kontakt/malmo/' target='_blank'><Logo src="/img/logo_lbm.png" /></a>
        <a href='https://malmo.se/' target='_blank'><Logo src="/img/logo_malmo.png" /></a>
        <a href='https://storbildsbolaget.se/' target='_blank'><Logo src="/img/logo_sbb.png" /></a>
        <a href='https://www.miljofabriken.com/' target='_blank'><Logo src="/img/miljofabriken.png" /></a>
        </Row>
      </StyledFooter>
    )
  }
}



const StyledFooter = styled('div')(
  () => `
    border-top: 5px solid #08354e;
    margin-bottom: 40px; 
    padding: 15px 30px 25px 30px;
`)

const Logo = styled('img')(
  () => `
    max-height: 70px;
    max-width: 180px;
`)

const Row = styled('div')(
  () => `
  display: flex;
  justify-content: space-between;
  align-items: center;
`)

const Header = styled('div')(
  () => ``)
export default Footer
