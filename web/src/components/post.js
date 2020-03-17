import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './post.module.scss'

function Post (props) {
  const {_rawBody, categories, title, mainImage, publishedAt} = props
  return (
    <article className={styles.root}>
      <Container>
        <header>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do, YYYY')}
            </div>
          )}
          <h1 className={styles.title}>{title}</h1>
        </header>

        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <Img
              loading='lazy'
              fluid={[
                mainImage.asset.mobileImage,
                {
                  ...mainImage.asset.tabletImage,
                  media: '(min-width: 768px)'
                },
                {
                  ...mainImage.asset.desktopImage,
                  media: '(min-width: 900px)'
                }
              ]}
              alt={mainImage.alt}
            />
          </div>
        )}

        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && (
              <PortableText blocks={_rawBody} className={styles.blockContent} />
            )}
          </div>

          <aside className={styles.metaContent}>
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>
                      <Link to={`/category/${category.slug.current}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Post
