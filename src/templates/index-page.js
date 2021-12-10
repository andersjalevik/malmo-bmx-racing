import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Box from '@mui/material/Box';

export const IndexPageTemplate = ({
  image,
  title,
  html,
}) => (
  <div>
    <h1>{title}</h1>
    {image && (
      <Box sx={{width: '50%',  marginTop: '175px', marginBottom: 2, marginLeft: 2, float: 'right'}}>
        <Img fluid={image.childImageSharp.fluid} />
      </Box>
    )}
    <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>

)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  body: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location} topImage={data.markdownRemark.frontmatter.topImage}>
      <IndexPageTemplate
        image={data.markdownRemark.frontmatter.image}
        title={data.markdownRemark.frontmatter.title}
        html={data.markdownRemark.html}
      />
      </Layout>
  )
}
/*
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
*/
export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        topImage
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
