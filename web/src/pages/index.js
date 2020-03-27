import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import PostPreviewList from '../components/post/post-preview-list'
import Subscribe from '../components/subscribe'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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
        fluid {
          ...GatsbySanityImageFluid
        }
      }
      alt
      caption
      attribution
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      intro
      description
      keywords
    }
    posts: allSanityPost(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
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

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout isHome='true'>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      <Container containerClass='hero__module hero__module--home'>
        <h2 className='heroTitle'>Welcome!</h2>
        <h3 className='heroSubtitle'>{site.intro}</h3>
      </Container>

      {postNodes && (
        <PostPreviewList
          title='Latest blog posts'
          nodes={postNodes}
          browseMoreHref='/blog/'
        />
      )}

      <Subscribe isFeed='true' />
    </Layout>
  )
}

export default IndexPage
