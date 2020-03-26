import React from 'react'
import {imageUrlFor} from '../../lib/image-url'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'
import PortableText from '../portableText'

import styles from './block-features.module.scss'

export default ({node}) => {
  return (
    <div className={
      `${node.cssClass ? node.cssClass : ''}
      ${node.iconSize ? node.iconSize : ''}
      ${node.layout ? node.layout : ''}`
    }>
      {node.title && (
        <h2 className={styles.title}>{node.title}</h2>
      )}
      <div className={styles.grid}>
        {node.featureList && node.featureList.map((feature) => (
          <div key={feature._key} className={styles.item}>
            {feature.icon && (
              <div
                className={styles.icon}
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />
            )}

            {feature.title && (
              <h3 className={styles.title}>{feature.title}</h3>
            )}

            {feature.content && (
              <div>
                <PortableText blocks={feature.content} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
