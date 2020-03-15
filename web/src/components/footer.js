import React from 'react'
import Container from './container'
import {cn} from '../lib/helpers'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.root}>
    <Container className={styles.container}>
      <div className={cn(styles.wrapper, styles.subscribeBox)}>
        <h3 className={styles.subscribeTitle}>Get updates in your inbox!</h3>
        <p>Be the first to know about the latest posts and other resources.</p>
        <p>
          <a
            className={styles.subscribeLink}
            rel="noopener noreferrer"
            href="http://eepurl.com/gNzLRz"
            target="_blank"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className={cn(styles.wrapper, styles.colophon)}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
