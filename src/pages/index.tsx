import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Hero from '~/layouts/Hero';
import Products from '~/layouts/Products';
import { IProduct } from '~/types';


type DataProps = {
    allShopifyProduct: {
        nodes: IProduct[]
    }
}

const HomePage: FC<PageProps<DataProps>> = ({ data }) => {
    const products = data.allShopifyProduct.nodes.map((i: any) => ({
        ...i,
        images: i.images.map((j: any) => j.childImageSharp),
        featuredImage: i.featuredImage.childImageSharp,
    })) as IProduct[];

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

export default HomePage;


export const query = graphql`
query HomePage {
    allShopifyProduct: allMockProductJson(
        limit: 8
        sort: {fields: createdAt, order: DESC}
      ) {
      nodes {
        ...ProductFragment
      }
    }
  }
  
  fragment ProductFragment on MockProductJson {
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
  
`;
