import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import Container from './container'

import styles from './header.module.scss'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, isHome}) => (
  <header className={styles.root}>
    <Container containerClass={styles.container} contentClass={styles.content}>
      <div className={styles.branding}>
        {isHome ? (
          <>
            <div className={styles.logo}>
              <Icon symbol='logo' />
            </div>
            <h1 className='visuallyHidden'>{siteTitle}</h1>
          </>
        ) : (
          <Link to='/'>
            <div className={styles.logo}>
              <Icon symbol='logo' />
            </div>
            <span className='visuallyHidden'>{siteTitle}</span>
          </Link>
        )}
      </div>

      <button
        aria-label='Navigation Menu'
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/work/'>Work</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
