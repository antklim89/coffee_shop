require('dotenv').config();


module.exports = {
    siteMetadata: {
        title: 'Coffee Shop',
        description: 'Coffee Shop',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sass',
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                resetCSS: true,
                isUsingColorMode: true,
            },
        },
        'gatsby-transformer-json',
        // {
        //     resolve: 'gatsby-source-shopify',
        //     options: {
        //         password: process.env.SHOPIFY_SHOP_PASSWORD,
        //         storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        //     },
        // },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'assets',
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: { rule: { include: /assets/ } },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: { aliases: { '~': 'src/' } },
        },
    ],
};
