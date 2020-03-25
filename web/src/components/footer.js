import {Link} from 'gatsby'
import React from 'react'
import Container from './container'
import {cn} from '../lib/helpers'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.root}>
    <nav className={styles.nav}>
      <Container containerClass={styles.navContainer}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/services/'>Services</Link>
          </li>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>

    <div className={styles.colophon}>
      <Container containerClass={styles.colophonContainer}>
        &copy; {new Date().getFullYear()} Fábio Barbosa
      </Container>
    </div>
  </footer>
)

export default Footer
