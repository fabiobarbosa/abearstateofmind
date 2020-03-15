import {Link} from 'gatsby'
import React from 'react'
import Container from '../container'
import PostPreview from './post-preview'

import styles from './post-preview-grid.module.scss'

function PostPreviewGrid (props) {
  return (
    <Container className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}

      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li className={styles.item} key={node.id}>
              <PostPreview {...node} />
            </li>
          ))}
      </ul>

      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link className={styles.browseMoreLink} to={props.browseMoreHref}>
            Browse more &#10230;
          </Link>
        </div>
      )}
    </Container>
  )
}

PostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PostPreviewGrid
