import { Container } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Product from '~/layouts/Product';
import { IProduct } from '~/types';


type DataProps = {
    product: IProduct
}

const ProductPage: FC<PageProps<DataProps>> = ({ data }) => {
    const products = {
        ...data.product as any,
        images: data.product.images.map((j: any) => ({ ...j, gatsbyImageData: j.childImageSharp.gatsbyImageData })),
        featuredImage: data.product.featuredImage.gatsbyImageData,
    } as IProduct;

    return (
        <>
            <Seo title={data.product.title} />
            <Container maxW='container.lg' my={4}>
                <Product {...products} />
            </Container>
        </>
    );
};

export default ProductPage;

export const query = graphql`
  query ProductPage($id: String!) {
    product: mockProductJson(id: {eq: $id}) {
    id
    description
    createdAt
    images {
        id
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 270, height: 400, transformOptions: {fit: COVER})
        }
        publicURL
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
        id
        childImageSharp {
            gatsbyImageData
        }
    }
    hasOnlyDefaultVariant
    hasOutOfStockVariants
    status
    }
  }
`;
