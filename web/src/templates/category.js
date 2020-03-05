import { graphql } from 'gatsby'
import React from 'react'
import PostPreviewList from '../components/post/post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import { title1, title2 } from '../components/typography.module.css'
import Layout from '../containers/layout'
import { mapEdgesToNodes } from '../lib/helpers'


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
            alt
          }
          title
          _rawExcerpt
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
      <Container>
        <h1 className={title1}>{title}</h1>
        {description && <h2 className={title2}>{description}</h2>}
        {postNodes && postNodes.length > 0 && <PostPreviewList nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default CategoryPage
