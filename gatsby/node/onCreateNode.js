const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      value: `/blog${createFilePath({ node, getNode })}`,
      node,
    })
  }
}
