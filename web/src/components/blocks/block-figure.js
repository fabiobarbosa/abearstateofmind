import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({node}) => {
  if (!node || !node.asset || !node.asset._id) { return null }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 675},
    clientConfig.sanity
  )
  return (
    <figure>
      <Img loading='lazy' fluid={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}
