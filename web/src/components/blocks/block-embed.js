import React from 'react'
import ReactPlayer from 'react-player'

import styles from './block-embed.module.scss'

export default ({node}) => {
  const {url} = node
  return (
    <div className={node.layout}>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.playerContent}
          url={url}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  )
}
