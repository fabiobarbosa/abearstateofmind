import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import Subscribe from './subscribe'
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'

import styles from './post.module.scss'

function Post (props) {
  const {_rawLead, _rawBody, categories, title, mainImage, publishedAt} = props
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
                  sizes={{...mainImage.image.asset.fluid, aspectRatio: 16 / 9}}
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

        <section className={styles.mainContainer}>
          {_rawLead && (
            <PortableText blocks={_rawLead} className={`size-large ${styles.lead}`} />
          )}

          {_rawBody && (
            <PortableText blocks={_rawBody} />
          )}
        </section>

      </article>

      <Subscribe />
    </>
  )
}

export default Post
