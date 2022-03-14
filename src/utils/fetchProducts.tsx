import { IProduct } from '~/types';


const query = `
query ProductsPage($title: String, $description: String) {
    allShopifyProduct: allMockProductJson(
        limit: 8
        sort: {fields: createdAt, order: DESC}
        filter: {title: {regex: $title}, description: {eq: $description}}
      ) {
        nodes {
            id
            description
            createdAt
            images {
                    childImageSharp {
                    gatsbyImageData
                }
            }
            handle
            isGiftCard
            productType
            tags
            title
            totalInventory
            totalVariants
            variants {
                id
                price
                title
                weight
                weightUnit
                inventoryQuantity
                availableForSale
            }
            featuredImage {
                    childImageSharp {
                    gatsbyImageData
                }
            }
            hasOnlyDefaultVariant
            hasOutOfStockVariants
            status
        }
    }
}
`;

export const fetchProducts = async (
    { title, description, tags }: Record<string, unknown>,
): Promise<IProduct[]> => {
    const variables: {title?: string, description?: string} = {};
    if (typeof title === 'string') variables.title = `/${title}/i`;
    if (typeof description === 'string') variables.description = `/${description}/i`;
    if (typeof tags === 'string') variables.description = `/${tags}/i`;

    const { data } = await fetch(
        `${process.env.API_URL}/___graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables,
            }),
        },
    ).then(d => d.json());

    return data.allShopifyProduct.nodes;
};
