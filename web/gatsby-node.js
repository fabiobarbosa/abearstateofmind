const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns');

async function createEntries(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      posts: allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      pages: allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      categories: allSanityCategory {
        edges {
          node {
            id
            slug {
              current
            }
            title
            description
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.posts || {}).edges || [];

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, 'YYYY/MM');
      const path = `/blog/${dateSegment}/${slug.current}/`;

      reporter.info(`Creating blog entry: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id }
      });
    });

  const pageEdges = (result.data.pages || {}).edges || [];

  pageEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/${slug.current}/`;

    reporter.info(`Creating page entry: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: { id }
    });
  });

  const categoryEdges = (result.data.categories || {}).edges || [];

  categoryEdges.forEach((edge, index) => {
    const { id, slug, title, description } = edge.node;
    const path = `/${slug.current}/`;

    reporter.info(`Creating category: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/category.js'),
      context: {
        id,
        title,
        description
      }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createEntries(graphql, actions, reporter);
};
