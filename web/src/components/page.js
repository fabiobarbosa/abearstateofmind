import React from 'react'
import PortableText from './portableText'
import FeaturedImage from './featuredImage'
import Hero from './hero'

import styles from './page.module.scss'

function Page (props) {
  const {_rawLead, _rawBody, title, publicTitle, mainImage} = props
  return (
    <article itemScope itemType='http://schema.org/Article'>
      <span
        itemProp='author publisher'
        itemScope
        itemType='http://schema.org/Person'
      >
        <meta itemProp='name' content='Fábio Barbosa' />
      </span>

      <header>
        <Hero
          title={publicTitle || title}
          headingLevel='h1'
          rawDescription={_rawLead}
          itemProps='true'
        />
      </header>

      {mainImage && mainImage.image && mainImage.image.asset && (
        <FeaturedImage image={mainImage.image} className={styles.mainImage} />
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
