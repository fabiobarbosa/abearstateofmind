import React from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'
import PortableText from '../portableText'

import styles from './block-features.module.scss'

export default ({node}) => {
  console.log({node})
  return (
    <div className={
      `${node.cssClass ? node.cssClass : ''}
      ${node.layout ? node.layout : ''}`
    }>
      {node.title && (
        <h2 className={styles.title}>{node.title}</h2>
      )}
      <div className={styles.grid}>
        {node.featureList && node.featureList.map((feature) => (
          <div key={feature._key} className={styles.item}>
            {feature.icon && (
              <img
                loading='lazy'
                src={imageUrlFor(buildImageObj(feature.icon))
                  .width(100)
                  .url()}
                alt
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
