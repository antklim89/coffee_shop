
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: '@babel/preset-react',
        options: { runtime: 'automatic' },
    });
};


exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    createPage({
        path: '/using-dsg',
        component: require.resolve('./src/templates/post.tsx'),
        context: {},
        defer: true,
    });
};
