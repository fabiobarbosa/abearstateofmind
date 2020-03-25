import {Link} from 'gatsby'
import React from 'react'
import PostPreview from './post-preview'
import Container from '../container'

import styles from './post-preview-list.module.scss'

function PostPreviewList (props) {
  return (
    <Container containerClass={styles.root}>
      <article>
        {props.title && (
          <header className={styles.header}>
            {props.title && <h2 className={styles.headline}>{props.title}</h2>}

            {props.browseMoreHref && (
              <Link className={styles.browseMoreLink} to={props.browseMoreHref}>
                Browse more &#10230;
              </Link>
            )}
          </header>
        )}

        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id} className={styles.item}>
                <PostPreview {...node} />
              </li>
            ))
          }
        </ul>
      </article>
    </Container>
  )
}

PostPreviewList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PostPreviewList
