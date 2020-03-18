import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from './header'
import Footer from './footer'

import '../styles/global.scss'
import styles from './layout.module.scss'
import '@reach/skip-nav/styles.css' // this will auto show and hide the link on focus

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, isHome }) => (
  <>
    <SkipNavLink />
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      isHome={isHome}
    />
    <SkipNavContent />
    <main className={styles.content}>{children}</main>
    <Footer />
  </>
)

export default Layout
