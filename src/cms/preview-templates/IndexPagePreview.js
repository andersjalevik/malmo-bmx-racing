import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplateCMS } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    
    return (
      <div style={{backgroundColor: 'white', padding: '16px', minHeight: 'calc(95vh)'}}>
      <IndexPageTemplateCMS
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