const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  const result = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "blogPosts"}}, sort: {fields: childMdx___frontmatter___date, order: DESC}) {
        edges {
          node {
            childMdx {
              id
            }
            relativePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allFile.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.relativePath.split('.')[0]}`,
      component: path.resolve(`./src/markdown-layout/MarkdownBlogLayout.jsx`),
      context: { id: node.childMdx.id },
    })
  })
}
