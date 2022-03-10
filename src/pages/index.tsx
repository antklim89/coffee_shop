import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import Products from '~/layouts/Products';
import { Product } from '~/types';


type DataProps = {
    allShopifyProduct: {
        nodes: Product[]
    }
}

const UsingTypescript: FC<PageProps<DataProps>> = ({ data }) => {
    const products = data.allShopifyProduct.nodes.map((i: any) => ({
        ...i,
        images: i.images.map((j: any) => j.childImageSharp),
        featuredImage: i.featuredImage.childImageSharp,
    })) as Product[];

    return (
        <>
            <Seo title="Home" />
            <Hero />
            <Container maxW='container.lg' my={4}>
                <Products products={products} />
            </Container>
        </>
    );
};

export default UsingTypescript;

// export const query = graphql`
//   {
//     allShopifyProduct {
//       nodes {
//         id
//         description
//         createdAt(fromNow: true)
//         images {
//           gatsbyImageData
//           id
//         }
//         handle
//         isGiftCard
//         productType
//         tags
//         title
//         totalInventory
//         totalVariants
//         variants {
//           id
//           price
//           title
//           weight
//           weightUnit
//           inventoryQuantity
//           availableForSale
//         }
//         featuredImage {
//           gatsbyImageData
//         }
//         hasOnlyDefaultVariant
//         hasOutOfStockVariants
//         status
//       }
//       totalCount
//     }
//   }
// `;

export const query = graphql`
query Product {
    allShopifyProduct: allMockProductJson {
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

export async function getServerData() {
    try {
        return { props: { foo: 'bar' } };
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        };
    }
}
