import React from 'react'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './page.module.scss'

function Page (props) {
  const {_rawLead, _rawBody, title, publicTitle, mainImage} = props
  return (
    <article itemScope itemType='http://schema.org/Article'>
      <span itemProp='author publisher' itemScope itemType='http://schema.org/Person'>
        <meta itemProp='name' content='Fábio Barbosa' />
      </span>

      <header>
        <Container
          containerClass={styles.headerContainer}
          contentClass={styles.headerContent}
        >
          <h1 className={styles.title} itemProp='headline'>{publicTitle || title}</h1>

          {_rawLead && (
            <div itemProp='description'>
              <PortableText blocks={_rawLead} className={styles.lead} />
            </div>
          )}
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
                itemProp='image'
                loading='lazy'
                fluid={mainImage.image.asset.fluid}
                sizes={{...mainImage.image.asset.fluid, aspectRatio: 16 / 9}}
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
        <div itemProp='articleBody' className={styles.mainContainer}>
          <PortableText blocks={_rawBody} className={styles.mainContent} />
        </div>
      )}
    </article>
  )
}

export default Page
