import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import Container from '../components/container'

import styles from './post-navigation.module.css'

const PostNav = ({next, previous}) => {
  const nextDate = next ? format(next.publishedAt, 'YYYY/MM') : null
  const previousDate = previous ? format(previous.publishedAt, 'YYYY/MM') : null

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        {next && <div className={styles.nextNav}>
          <Link to={`/blog/${nextDate}/${next.slug.current}/`}>
            {next.title}
          </Link>
        </div>}
        {previous && <div className={styles.previousNav}>
          <Link to={`/blog/${previousDate}/${previous.slug.current}/`}>
            {previous.title}
          </Link>
        </div>}
      </div>
    </nav>
  )
}

export default PostNav
