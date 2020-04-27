import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import Subscribe from './subscribe'
import PortableText from './portableText'
import {Link} from 'gatsby'
import FeaturedImage from './featuredImage'
import Container from './container'

import styles from './post.module.scss'

function Post (props) {
  const {_rawLead, _rawBody, categories, title, mainImage, publishedAt} = props
  return (
    <>
      <article itemScope itemType='http://schema.org/Article'>
        <span
          itemProp='author publisher'
          itemScope
          itemType='http://schema.org/Person'
        >
          <meta itemProp='name' content='Fábio Barbosa' />
        </span>

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

            <h1 className={styles.title} itemProp='headline'>
              {title}
            </h1>

            {publishedAt && (
              <time
                dateTime={format(new Date(publishedAt), 'YYYY-MM-DD')}
                className={styles.publishedAt}
                itemProp='dateCreated datePublished'
              >
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </time>
            )}
          </Container>
        </header>

        {mainImage && mainImage.image && mainImage.image.asset && (
          <FeaturedImage image={mainImage.image} className={styles.mainImage} />
        )}

        {_rawLead && (
          <div itemProp='description'>
            <PortableText blocks={_rawLead} className={styles.lead} />
          </div>
        )}

        {_rawBody && (
          <div itemProp='articleBody'>
            <PortableText blocks={_rawBody} className={styles.mainContent} />
          </div>
        )}
      </article>

      <Subscribe />
    </>
  )
}

export default Post
