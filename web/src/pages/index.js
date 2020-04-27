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
import Hero from '../components/hero'
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
      _rawIntro
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
    <Layout isHome='true' template='home'>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      <Hero
        title='Welcome!'
        headingLevel='h2'
        rawDescription={site._rawIntro}
      />

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
