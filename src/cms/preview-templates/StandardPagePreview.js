import React from 'react'
import PropTypes from 'prop-types'
import { StandardPageTemplateCMS } from '../../templates/standard-page'

const StandardPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
  
  <div style={{backgroundColor: 'white', padding: '16px'}}>
  <StandardPageTemplateCMS
    title={entry.getIn(['data', 'title'])}
    content={data.body}
  />
  </div>
)
  }

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StandardPagePreview
