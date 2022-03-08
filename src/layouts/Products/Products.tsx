import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

import { ProductsProps } from './Products.types';
import ProductsItem from './ProductsItem';


const Products: FC<ProductsProps> = ({ products }) => {
    return (
        <SimpleGrid columns={4} spacing={10}>
            {products.map((product) => (
                <ProductsItem key={product.id} product={product} />
            ))}
        </SimpleGrid>
    );
};

export default Products;

