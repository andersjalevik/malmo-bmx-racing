import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  html,
}) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>

)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  return (
    <Layout 
      location={location} topImage={data.markdownRemark.frontmatter.topImage}
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    >
      <IndexPageTemplate
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
        description
      }
    }
  }
`
