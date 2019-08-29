const path = require(`path`);

const TEMPLATE_PATH = `./src/templates/blog-post.jsx`;
const POST_QUERY = `
{
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
    ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
    }
}`;

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(TEMPLATE_PATH);
  const result = await graphql(POST_QUERY);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};
