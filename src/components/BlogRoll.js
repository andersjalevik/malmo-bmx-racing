import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'

const StyledLink = styled(Link)(() => `

`);

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <Box sx={{display: 'flex', marginBottom: 8, marginTop: 4}}>
                <Box sx={{width: '32%'}}>
                  {
                  post.frontmatter.image ?
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid}/> : 
                    <Box sx={{
                      height: '100%',
                      backgroundImage: 'url(../../img/rider-blue.png)',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                    }} />
                    }</Box>
                <Box sx={{width: '2%'}} />
                <Box sx={{width: '62%'}}>
                  <h2 style={{marginTop: 0}}>{post.frontmatter.title}</h2>
                  <p>{post.excerpt}</p>
                  <StyledLink to={post.fields.slug}>
                    Läs mer
                  </StyledLink>
                  {/* post.frontmatter.date */}
                </Box>
              </Box>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
