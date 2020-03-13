import {Link} from 'gatsby'
import React from 'react'
import PostPreview from './post-preview'

import styles from './post-preview-list.module.scss'

function PostPreviewList (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <PostPreview {...node} isInList />
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
    </div>
  )
}

PostPreviewList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PostPreviewList
