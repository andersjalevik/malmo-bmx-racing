import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default ({location}) =>{
    return (
      <Layout topImage='image2' location={location}>
          <h1>Nyheter</h1>
        <BlogRoll />
      </Layout>
    )
  }
