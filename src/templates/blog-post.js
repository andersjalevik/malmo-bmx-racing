import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
import Box from '@mui/material/Box';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
        <div><h1>{title}</h1></div>
        <div>
          {(image?.childImageSharp) && (
            <Box sx={{
              width: {xs: '100%', sm: '45%', md: '45%'},
              float: {xs: 'inherit', sm: 'right', md: 'right'},
              margin: {xs: '0', sm: "0 0 1em 2em", md: "0 0 1em 2em"},
            }}>
          <Img fluid={image.childImageSharp.fluid}/>
          </Box>
          )}
          
          { // Used by cms preview, wont render styled components
          (image && !image.childImageSharp) && (
            <Box style={{
              maxWidth: '360px',
              width: '100%',
              float: 'right', 
              margin: '0 0 1em 2em',
            }}>
            <img src={image} style={{width: '100%'}} />
          </Box>
          )}
    
        <PostContent content={content} />
          {tags && tags.length ? (
            <div>
              <h4>Tags</h4>
              <ul>
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout topImage='image2' location={location} title={`Nyheter: ${post.frontmatter.title}`} description={post.frontmatter.description}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        topImage
        image {
          childImageSharp {
            fluid(maxWidth: 640, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
