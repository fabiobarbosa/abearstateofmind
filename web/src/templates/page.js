import React from 'react'
import {graphql} from 'gatsby'
// import {toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import Page from '../components/page'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import styles from './page.module.scss'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      mainImage {
        image {
          asset {
            id
          }
        }
        ...SanityImage
      }
      title
      publicTitle
      slug {
        current
      }
      excerpt
      _rawLead(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const PageTemplate = props => {
  const {data, errors} = props
  const page = data && data.page
  return (
    <Layout className={styles.root}>
      {errors && <SEO title='GraphQL Error' />}
      {page && (
        <SEO
          title={page.publicTitle || page.title || 'Untitled'}
          description={page.excerpt}
          image={page.mainImage ? page.mainImage.image : ''}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <Page {...page} />}
    </Layout>
  )
}

export default PageTemplate
