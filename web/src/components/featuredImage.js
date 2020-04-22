import React from 'react'
import Img from 'gatsby-image'
import Container from './container'

import styles from './featuredImage.module.scss'

function FeaturedImage (props) {
  const {className, image} = props
  return (
    <div className={className}>
      <Container containerClass={styles.container}>
        <figure>
          <Img
            itemProp='image'
            loading='lazy'
            fluid={image.asset.fluid}
            sizes={{...image.asset.fluid, aspectRatio: 16 / 9}}
            alt={image.alt}
          />
          {(image.caption || image.attribution) && (
            <figcaption>
              {image.caption}
              {image.caption && image.attribution && (
                <span className={styles.separator} />
              )}
              {image.attribution && (
                <span className={styles.attribution}>{image.attribution}</span>
              )}
            </figcaption>
          )}
        </figure>
      </Container>
    </div>
  )
}

export default FeaturedImage
