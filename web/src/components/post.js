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
    <>
      <article className={styles.root}>
        <header>
          <Container
            containerClass={styles.headerContainer}
            contentClass={styles.headerContent}
          >
            {categories && (
              <ul className={styles.categories}>
                {categories.map(category => (
                  <li key={category._id}>
                    <Link to={`/category/${category.slug.current}`}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <h1 className={styles.title}>{title}</h1>

            {publishedAt && (
              <time
                dateTime={format(new Date(publishedAt), 'YYYY-MM-DD')}
                className={styles.publishedAt}
              >
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </time>
            )}
          </Container>
        </header>

        {mainImage && mainImage.image && mainImage.image.asset && (
          <div className={styles.mainImage}>
            <Container
              containerClass={styles.mainImageContainer}
              contentClass={styles.mainImageContent}
            >
              <figure>
                <Img
                  loading='lazy'
                  fluid={mainImage.image.asset.fluid}
                  sizes={{...mainImage.image.asset.fluid, aspectRatio: 21 / 9}}
                  alt={mainImage.image.alt}
                />
                {(mainImage.image.caption || mainImage.image.attribution) && (
                  <figcaption>
                    {mainImage.image.caption}
                    {mainImage.image.caption && mainImage.image.attribution && (
                      <span className='separator' />
                    )}
                    {mainImage.image.attribution && (
                      <span className='attribution'>{mainImage.image.attribution}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            </Container>
          </div>
        )}

        {_rawBody && (
          <PortableText blocks={_rawBody} className={styles.mainContainer} />
        )}
      </article>

      <Container
        containerClass={styles.subscribe}
        contentClass={styles.subscribeContent}>
        <div className={styles.subscribeHeader}>
          <h3 className={styles.subscribeTitle}>Get updates in your inbox!</h3>
          <p>Be the first to know about the latest posts and other resources.</p>
        </div>
        <a
          className={styles.subscribeLink}
          rel='noopener noreferrer'
          href='http://eepurl.com/gNzLRz'
          target='_blank'
        >
          Sign up
        </a>
      </Container>
    </>
  )
}

export default Post
