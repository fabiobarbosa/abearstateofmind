import React from "react";
import {cn} from "../lib/helpers"

import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.root}>
    <div className={cn(styles.wrapper, styles.subscribeBox)}>
      <div className={styles.container}>
        <h3 className={styles.subscribeTitle}>Get updates in your inbox!</h3>
        <p>Be the first to know about the latest posts and other resources.</p>
        <p>
          <a className={styles.subscribeLink} href="http://eepurl.com/gNzLRz" target="_blank">
            Sign up
          </a>
        </p>
      </div>
    </div>

    <div className={cn(styles.wrapper, styles.colophon)}>
      <div className={styles.container}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a>{" "}
          &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
