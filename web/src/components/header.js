import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import Container from './container'
import {cn} from '../lib/helpers'

import styles from './header.module.scss'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, isHome}) => (
  <header className={styles.root}>
    <Container className={styles.container}>

      <div className={styles.branding}>
        {isHome ? <h1>{siteTitle}</h1> : <Link to='/'>{siteTitle}</Link>}
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
