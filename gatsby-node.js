exports.createPages = async ({ actions, graphql }) => {

    const {createPage}= actions
    const dummyMarkdownData= await graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `)
    if (dummyMarkdownData.errors){
        throw dummyMarkdownData.errors
    }
    dummyMarkdownData.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path:`${edge.node.frontmatter.path}/`,
            component:require.resolve(`./src/templates/dummy-template.js`),
            context:{
                title:edge.node.frontmatter.title
            }
        })
    });
}