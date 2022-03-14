import { Container } from '@chakra-ui/react';
import { GetServerData, Link, PageProps  } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import Products from '~/layouts/Products';
import { IProduct } from '~/types';
import { fetchProducts } from '~/utils';


type DataProps = {
    allShopifyProduct: {
        nodes: IProduct[]
    }
}


const HomePage: FC<PageProps<DataProps, null, null, IProduct[]>> = ({ serverData }) => {
    const products = serverData.map((i: any) => ({
        ...i,
        images: i.images.map((j: any) => j.childImageSharp),
        featuredImage: i.featuredImage.childImageSharp,
    })) as IProduct[];


    return (
        <>
            <Seo title="Products" />
            <Container maxW='container.lg' my={4}>
                <Link to="?title=cappucino">Link</Link>
                <Products products={products} />
            </Container>
        </>
    );
};

export default HomePage;

export const getServerData: GetServerData<IProduct[]> = async ({ query = {} }) => {
    const products = await fetchProducts(query);
    return { props: products };
};

