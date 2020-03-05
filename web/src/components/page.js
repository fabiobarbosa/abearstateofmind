import React from 'react';
import PortableText from './portableText'
import Container from './container'

import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

import styles from './post.module.css'

function Page(props) {
  const { _rawBody, title, mainImage } = props;
  return (
    <article className={styles.root}>
      <Container>
        <header>
          <h1 className={styles.title}>{title}</h1>
        </header>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <Img fluid={getFluidGatsbyImage(
              mainImage.asset._id,
              {maxWidth: 1200},
              clientConfig.sanity
            )} alt={mainImage.alt} />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && <PortableText blocks={_rawBody} className={styles.blockContent} />}
          </div>
        </div>
      </Container>
    </article>
  );
}

export default Page;
