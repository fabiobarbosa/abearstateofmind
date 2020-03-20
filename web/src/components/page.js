import React from 'react'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './page.module.scss'

function Page (props) {
  const {_rawBody, title, mainImage} = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <Container
            containerClass={styles.mainImageContainer}
            contentClass={styles.mainImageContent}
          >
            <Img
              loading='lazy'
              fluid={mainImage.asset.fluid}
              sizes={{...mainImage.asset.fluid, aspectRatio: 21 / 9}}
              alt={mainImage.alt}
            />
          </Container>
        </div>
      )}

      <header>
        <Container
          containerClass={styles.headerContainer}
          contentClass={styles.headerContent}
        >
          <h1 className={styles.title}>{title}</h1>
        </Container>
      </header>

      <Container
        containerClass={styles.mainContainer}
        contentClass={styles.mainContent}
      >
        {_rawBody && (
          <PortableText blocks={_rawBody} className={styles.blockContent} />
        )}
      </Container>
    </article>
  )
}

export default Page
