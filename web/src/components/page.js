import React from 'react';
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './blog-post.module.css'

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
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit("crop")
                .auto("format")
                .url()}
              alt={mainImage.alt}
            />
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
