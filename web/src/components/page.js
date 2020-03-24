import React from 'react'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './page.module.scss'

function Page (props) {
  const {_rawBody, title, mainImage} = props
  return (
    <article className={styles.root}>
      <header>
        <Container
          containerClass={styles.headerContainer}
          contentClass={styles.headerContent}
        >
          <h1 className={styles.title}>{title}</h1>
        </Container>
      </header>

      {mainImage && mainImage.image && mainImage.image.asset && (
        <div className={styles.mainImage}>
          <Container
            containerClass={styles.mainImageContainer}
            contentClass={styles.mainImageContent}
          >
            <figure>
              <Img
                loading='lazy'
                fluid={mainImage.image.asset.fluid}
                sizes={{...mainImage.image.asset.fluid, aspectRatio: 21 / 9}}
                alt={mainImage.image.alt}
              />
              {(mainImage.image.caption || mainImage.image.attribution) && (
                <figcaption>
                  {mainImage.image.caption}
                  {mainImage.image.caption && mainImage.image.attribution && (
                    <span className='separator' />
                  )}
                  {mainImage.image.attribution && (
                    <span className='attribution'>{mainImage.image.attribution}</span>
                  )}
                </figcaption>
              )}
            </figure>
          </Container>
        </div>
      )}

      {_rawBody && (
        <PortableText blocks={_rawBody} className={styles.mainContainer} />
      )}
    </article>
  )
}

export default Page
