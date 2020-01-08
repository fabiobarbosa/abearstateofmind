import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, isHome}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} isHome={isHome} />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
);

export default Layout;
