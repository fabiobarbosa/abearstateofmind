import React from 'react'
import Container from './container'

import styles from './subscribe.module.scss'

const Subscribe = (props) => (
  <Container
    containerClass={props.isFeed ? styles.atFeed : styles.atEntry}
    contentClass={styles.content}>
    <div className={styles.header}>
      <h3 className={styles.title}>Get updates in your inbox!</h3>
      <p>Be the first to know about the latest posts and other resources.</p>
    </div>
    <a
      className={styles.link}
      rel='noopener noreferrer'
      href='http://eepurl.com/gNzLRz'
      target='_blank'
    >
      Sign up
    </a>
  </Container>
)

export default Subscribe
