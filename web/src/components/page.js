import React from 'react'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './page.module.scss'

function Page (props) {
  const {_rawBody, title, mainImage} = props
  return (
    <article className={styles.root}>
      <Container>
        <header>
          <h1 className={styles.title}>{title}</h1>
        </header>

        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <Img
              loading='lazy'
              fluid={mainImage.asset.fluid}
              alt={mainImage.alt}
            />
          </div>
        )}

        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && (
              <PortableText blocks={_rawBody} className={styles.blockContent} />
            )}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Page
