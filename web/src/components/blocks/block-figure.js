import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

import styles from './block-figure.module.scss'

export default ({node}) => {
  if (!node.image || !node.image.asset || !node.image.asset._id) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(
    node.image.asset._id,
    {maxWidth: 1200},
    clientConfig.sanity
  )
  return (
    <figure className={`
      ${node.layout ? node.layout : ''}
      ${node.cssClass ? node.cssClass : ''}`
    }>
      {node.title && (<h3 className={styles.title}>{node.title}</h3>)}
      <Img loading='lazy' fluid={fluidProps} alt={node.image.alt} />
      {(node.image.caption || node.image.attribution) && (
        <figcaption>
          {node.image.caption}
          {node.image.caption && node.image.attribution && (
            <span className='separator' />
          )}
          {node.image.attribution && (
            <span className='attribution'>{node.image.attribution}</span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
