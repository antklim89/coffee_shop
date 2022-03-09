
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
exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    createPage({
        path: '/product',
        component: require.resolve('./src/templates/product.tsx'),
        context: {},
        defer: true,
    });
};
