import { Container } from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import { FC } from 'react';

import product from '../mockProduct';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import Products from '~/layouts/Products';
import { Product } from '~/types';


type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: FC<PageProps<DataProps>> = () => {
    const products = product.allShopifyProduct.nodes as Product[];

    return (
        <>
            <Seo title="Using TypeScript" />
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
