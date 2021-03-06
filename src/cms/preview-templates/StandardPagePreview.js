import React from 'react'
import PropTypes from 'prop-types'
import { StandardPageTemplate } from '../../templates/standard-page'

const StandardPagePreview = ({ entry, widgetFor }) => (
  <div style={{backgroundColor: 'white', padding: '16px'}}>
  <StandardPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
  </div>
)

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StandardPagePreview
