import { LinkBox, Heading, Text, LinkOverlay } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import { ProductsItemProps } from './Products.types';


const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
    return (
        <LinkBox
            _hover={{ shadow: 'xl', transform: 'scale(1.005)' }}
            as="section"
            backgroundColor="whiteAlpha.600"
            minH={32}
            p={2}
            shadow="lg"
        >
            <Heading as="h2" size="md">
                <LinkOverlay
                    as={Link}
                    href={`/product/${product.id}`} 
                    to={`/product/${product.id}`}
                >
                    {product.title}
                </LinkOverlay>
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">${product.variants[0].price}</Text>
            <Text fontSize="sm" fontWeight="bold">{product.variants[0].weight} {product.variants[0].weightUnit}</Text>
            {product.description}
        </LinkBox>
    );
};

export default ProductsItem;
