import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../../lib/helpers'
import PortableText from '../portableText'

import styles from './post-preview.module.scss'

function PostPreview (props) {
  return (
    <Link
      className={styles.link}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.date}>
        {format(props.publishedAt, 'MMMM Do, YYYY')}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>

        {props._rawLead && (
          <div className={styles.excerpt}>
            <PortableText
              blocks={props._rawLead}
            />
          </div>
        )}
      </div>
    </Link>
  )
}

export default PostPreview
