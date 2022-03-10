import { LinkBox, Heading, Text, LinkOverlay, Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { ProductsItemProps } from './Products.types';


const ProductsItem: FC<ProductsItemProps> = ({ product }) => {

    return (
        <LinkBox
            _hover={{ shadow: 'xl', transform: 'scale(1.005)' }}
            as="section"
            backgroundColor="whiteAlpha.600"
            minH={32}
            shadow="lg"
        >
            <GatsbyImage alt={product.title} image={product.featuredImage.gatsbyImageData} />
            <Box p={2}>
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

            </Box>
        </LinkBox>
    );
};

export default ProductsItem;
