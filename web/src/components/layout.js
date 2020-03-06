import React from 'react'
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import "@reach/skip-nav/styles.css" //this will auto show and hide the link on focus

import Header from './header'
import Footer from './footer'

import '../styles/global.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, isHome}) => (
  <>
    <SkipNavLink />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} isHome={isHome} />
    <SkipNavContent />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout;
