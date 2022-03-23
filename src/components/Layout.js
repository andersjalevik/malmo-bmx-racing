import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../global.css'

const TemplateWrapper = ({children, topImage, location, title, description}) => {

  const { title: fallbackTitle, description: fallbackDescription } = useSiteMetadata()
  if (!topImage) {
    topImage="image6"
  }

  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "top/top_turn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "top/top_focus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "top/top_friends.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "top/top_jump.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "top/top_flight.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }    
      image6: file(relativePath: { eq: "top/top_walk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 300, quality: 75, cropFocus: SOUTHWEST) {
            ...GatsbyImageSharpFluid
          }
        }
      }   
    }
  `)

    return (
    <div>
      <Helmet>
        <html lang="se" />
        <title>{title || fallbackTitle}</title>
        <meta name="description" content={description || fallbackDescription} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`/img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`/img/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Paper elevation={3} sx={{margin: 'auto', maxWidth: 900, marginTop: {xs: 0, sm: 0, md: 6}}}>
      {/*
        <Box sx={{backgroundColor: '#ff55ff', textAlign: 'center', fontSize: '20px', padding: 2}}>
        <div>OBS!!! Detta är ej den officiella hemsidan för Malmö BMX Racing!</div>
        <a href="https://www.facebook.com/groups/malmobmx">Kolla vår facebooksida istället</a>
        </Box>
 */}
        <Img fluid={data[topImage].childImageSharp.fluid} style={{display: 'block'}} />
{/*
        <Box sx={{position: 'absolute', width: '120px', top:'220px', height: '102px', backgroundColor: 'white', left: 'calc(50% - 60px)', margin: 'auto'}}>
          <img src='/img/logo.png' width='120' height='120' style={{marginTop: '-18px'}} />
        </Box>
*/}
        <Navbar location={location} />
        <Box sx={{paddingLeft: {xs: 2, sm: 4, md: 6}, paddingRight: {xs: 2, sm: 4, md: 6}, paddingTop: 2, paddingBottom: {xs: 2, sm: 4, md: 6}}}>
          {children}
        </Box>
        <Footer />
      </Paper>
    </div>
  )
}

export default TemplateWrapper
