import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';


type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: FC<PageProps<DataProps>> = () => {
    return (
        <>
            <Seo title="Using TypeScript" />
            <Hero />
        </>
    );
};

export default UsingTypescript;

// export const query = graphql`
//   {
//     allShopifyProduct {
//       nodes {
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
