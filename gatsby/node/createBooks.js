const path = require(`path`);

const TEMPLATE_PATH = `./src/templates/book.jsx`;
const BOOK_QUERY = `
{

}`;

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const bookComponent = path.resolve(TEMPLATE_PATH);
  const result = await graphql(BOOK_QUERY);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allBook.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/books/${post.node.id}`,
      component: bookComponent,
      context: {
        id: post.node.id,
        previous,
        next,
      },
    });
  });
};
