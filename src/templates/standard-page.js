import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const StandardPageTemplate = ({ title, content, contentComponent }) => {
 const PageContent = contentComponent || Content
  return (
    <>
    <h1>
      {title} 
    </h1>
    <PageContent className="content" content={content} />
  </>)
}

StandardPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const StandardPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  return (
    <Layout 
      topImage={post.frontmatter.topImage}
      location={location}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <StandardPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

StandardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StandardPage

export const standardPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        topImage
      }
    }
  }
`
