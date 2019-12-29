const path = require(`path`);

const BLOG_TEMPLATE_PATH = `./src/templates/blog.jsx`;
const BOOK_TEMPLATE_PATH = `./src/templates/book.jsx`;
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
                    id
                }
            }
        }
    },
    allBooks(
      filter: { lastFinishedAt: {ne: null} }, 
      sort: { fields: [lastFinishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          author
          highlights
          lastFinishedAt(formatString: "DD MMMM YYYY")
        }
      }
    }
}`;

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(POST_QUERY);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const blogTemplate = path.resolve(BLOG_TEMPLATE_PATH);
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/blog/${post.node.frontmatter.id}`,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Create book pages.
  const bookTemplate = path.resolve(BOOK_TEMPLATE_PATH);
  const books = result.data.allBooks.edges;
  books.forEach((book, index) => {
    const previous = index === books.length - 1 ? null : books[index + 1].node;
    const next = index === 0 ? null : books[index - 1].node;

    createPage({
      path: `/books/${book.node.slug}`,
      component: bookTemplate,
      context: {
        slug: book.node.slug,
        previous,
        next,
      },
    });
  });
};
