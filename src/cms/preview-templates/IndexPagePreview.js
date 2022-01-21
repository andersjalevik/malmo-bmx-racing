import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    
    return (
      <div style={{backgroundColor: 'white', padding: '16px'}}>
      <IndexPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        html={data.body}
      />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

/*
    <Layout location={location} topImage={data.markdownRemark.frontmatter.topImage}>
      <IndexPageTemplate
        image={data.markdownRemark.frontmatter.image}
        title={data.markdownRemark.frontmatter.title}
        html={data.markdownRemark.html} */