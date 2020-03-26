import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../../lib/helpers'
import PortableText from '../portableText'

import Img from 'gatsby-image'

import styles from './post-preview.module.scss'

function PostPreview (props) {
  return (
    <Link
      className={styles.link}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      {props.mainImage && props.mainImage.image && props.mainImage.image.asset && (
        <div className={styles.leadMediaThumb}>
          <Img
            loading='lazy'
            fluid={props.mainImage.image.asset.fluid}
            alt={props.mainImage.image.alt}
          />
        </div>
      )}

      <div className={styles.text}>
        <div className={styles.content}>
          <h3 className={styles.title}>{props.title}</h3>

          {props._rawLead && (
            <div className={styles.excerpt}>
              <PortableText
                blocks={props._rawLead}
                className={styles.excerptContent}
              />
            </div>
          )}
        </div>

        <div className={styles.date}>
          {format(props.publishedAt, 'MMMM Do, YYYY')}
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
