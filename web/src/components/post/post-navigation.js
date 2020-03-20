import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import Container from '../container'

import styles from './post-navigation.module.scss'

const PostNav = ({next, previous}) => {
  const nextDate = next ? format(next.publishedAt, 'YYYY/MM') : null
  const previousDate = previous ? format(previous.publishedAt, 'YYYY/MM') : null

  return (
    <nav className={styles.root}>
      <Container
        containerClass={styles.container}
        contentClass={styles.content}>
        {previous && (
          <div className={styles.previous}>
            <Link
              to={`/blog/${previousDate}/${previous.slug.current}/`}
              title='Previous post'
            >
              <span className={styles.headline}>Previous Post:</span>
              {previous.title}
            </Link>
          </div>
        )}
        {next && (
          <div className={styles.next}>
            <Link
              to={`/blog/${nextDate}/${next.slug.current}/`}
              title='Next post'
            >
              <span className={styles.headline}>Next Post:</span>
              {next.title}
            </Link>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default PostNav
