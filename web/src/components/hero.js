import React from 'react'
import PortableText from './portableText'
import Container from './container'

import styles from './hero.module.scss'

function Hero (props) {
  const {title, headingLevel, rawDescription, plainDescription, itemProps} = props

  const validHeadingLevels = ['h1', 'h2']
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : ''
  const Heading = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p'

  return (
    <Container containerClass={styles.root} contentClass={styles.content}>
      <Heading
        className={styles.title}
        itemProp={itemProps ? 'title' : null}>
        {title}
      </Heading>

      {rawDescription && (
        <div
          className={styles.description}
          itemProp={itemProps ? 'description' : null}>
          <PortableText blocks={rawDescription} />
        </div>
      )}

      {plainDescription && (
        <div
          className={styles.description}
          itemProp={itemProps ? 'description' : null}>
          <p>{plainDescription}</p>
        </div>
      )}
    </Container>
  )
}

export default Hero
