import React from 'react'
import {graphql} from 'gatsby'
import {toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import Page from '../components/page'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      mainImage {
        ...SanityImage
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const PageTemplate = props => {
  const {data, errors} = props
  const page = data && data.page
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {page && <SEO title={page.title || 'Untitled'} description={toPlainText(page._rawExcerpt)} image={page.mainImage} />}

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
