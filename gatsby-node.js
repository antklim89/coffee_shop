
/**
 * @param {import('gatsby').CreateBabelConfigArgs}
 */
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: { runtime: 'automatic' },
    });
};

/**
 * @param {import('gatsby').CreatePageArgs} 
 */
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
    query Product {
        allShopifyProduct: allMockProductJson {
            nodes {
                id
            }
        }
    }
  `);
  

    for (const product of data.allShopifyProduct.nodes) {
        createPage({
            path: `/product/${product.id}`,
            component: require.resolve('./src/templates/product.tsx'),
            context: { id: product.id },
            defer: true,
        });
        
    }
};
