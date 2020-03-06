import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../../lib/helpers'
import PortableText from '../portableText'

import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

import styles from './post-preview.module.css'

function PostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >

      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <Img loading='lazy'
            fluid={getFluidGatsbyImage(
              props.mainImage.asset._id,
              {maxWidth: 600},
              clientConfig.sanity
            )} alt={props.mainImage.alt} />
        )}
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>{props.title}</h3>

        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} className={styles.excerptContent}/>
          </div>
        )}

        <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
      </div>

    </Link>
  )
}

export default PostPreview
