import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/global.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, isHome}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} isHome={isHome} />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout;
