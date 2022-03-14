import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  html,
}) => {
  return (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FStockholm&mode=AGENDA&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=1&showTz=0&showNav=0&title&src=Zmdpbm5nYmhjbXA2aHRiNHE3a3FjbTE0Z2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
            style={{borderWidth:0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
    </div>

)}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location} topImage={data.markdownRemark.frontmatter.topImage}>
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
  query CalendarPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "calendar-page" } }) {
      html
      frontmatter {
        topImage
        title
      }
    }
  }
`
