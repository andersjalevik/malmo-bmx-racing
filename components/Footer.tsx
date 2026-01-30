'use client'

import React from 'react'
import { styled } from '@mui/material/styles'

const StyledFooter = styled('div')(
  () => `
    border-top: 5px solid #08354e;
    margin-bottom: 40px;
    padding: 15px 30px 25px 30px;
`
)

const Logo = styled('img')(
  () => `
    max-height: 70px;
    max-width: 180px;
    object-fit: contain;
`
)

const Row = styled('div')(
  () => `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
`
)

const Header = styled('div')(() => ``)

export default function Footer() {
  return (
    <StyledFooter>
      <Header>Sammarbetspartners:</Header>
      <Row>
        <a href="https://mvbab.se/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/logo_mvb.png" alt="MVB" />
        </a>
        <a
          href="https://www.lyft-byggmaskiner.se/kontakt/malmo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/img/logo_lbm.png" alt="Lyft & Byggmaskiner" />
        </a>
        <a href="https://malmo.se/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/logo_malmo.png" alt="Malmö Stad" />
        </a>
        <a
          href="https://storbildsbolaget.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/img/logo_sbb.png" alt="Storbildsbolaget" />
        </a>
        <a
          href="https://www.miljofabriken.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/img/miljofabriken.png" alt="Miljöfabriken" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo
            src="/img/Åkerblom & Hansson Ekonomi & Skattekonsult AB Horisontell.jpg"
            alt="Åkerblom & Hansson"
          />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/RSA.jpg" alt="RSA" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/Nordanå Grusterminal.jpg" alt="Nordanå Grusterminal" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/Blue n Yellow.jpg" alt="Blue n Yellow" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo
            src="/img/Önnerups Schakt & Gräv copy.jpg"
            alt="Önnerups Schakt & Gräv"
          />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo
            src="/img/flackarps-maskinstation-rund-650x650.png"
            alt="Flackarps Maskinstation"
          />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/Outlook-ekzbcbdd (1).png" alt="Sponsor" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Logo src="/img/logga jpeg.JPG" alt="Sponsor" />
        </a>
      </Row>
    </StyledFooter>
  )
}
