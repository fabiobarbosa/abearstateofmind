import { graphql } from 'gatsby'
import React from 'react'
import { mapEdgesToNodes } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import PostPreviewList from '../components/post/post-preview-list'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query categoryPageQuery($id: String!) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        categories: { elemMatch: { id: { eq: $id } } },
        slug: { current: { ne: null } },
        publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
          }
          title
          _rawLead
          slug {
            current
          }
        }
      }
    }
  }
`

const CategoryPage = props => {
  const {data, errors, pageContext} = props
  const {title, description} = pageContext

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title={title} />
      <Container containerClass='hero__module'>
        <h1 className='heroTitle'>{title}</h1>
        {description && <h2 className='heroSubtitle'>{description}</h2>}
      </Container>

      {postNodes && postNodes.length > 0 && <PostPreviewList nodes={postNodes} />}
    </Layout>
  )
}

export default CategoryPage
