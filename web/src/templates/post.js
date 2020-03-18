import {graphql} from 'gatsby'
import React from 'react'
import {toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import PostNav from '../components/post/post-navigation'
import Post from '../components/post'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
        slug {
          current
        }
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

const PostTemplate = props => {
  const {data, errors, pageContext} = props
  const {next, previous} = pageContext
  const post = data && data.post
  const postNav = next || previous
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <Post {...post} />}

      {postNav && <PostNav next={next} previous={previous} />}
    </Layout>
  )
}

export default PostTemplate
