import {
    Box, Heading, VStack, SimpleGrid, Text, Button, Select, 
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { IProduct } from '~/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Product: FC<IProduct> = ({ images, title, description, variants }) => {
    const [variantIndex, setVariantIndex] = useState(0);
    const selectedVariant = useMemo(() => variants[variantIndex], [variantIndex]);

    const handeChangeVariant: ChangeEventHandler<HTMLSelectElement>  = useCallback((e) => {
        setVariantIndex(parseInt(e.target.value, 10));
    }, []);
    
    return (
        <SimpleGrid as="section" columns={[1, 1, 2]} gap={10}>
            <Box>
                <Carousel showThumbs={false}>
                    {images.map((image) => (
                        <GatsbyImage alt={title} image={image.gatsbyImageData} key={image.id} />
                    ))}
                </Carousel>
            </Box>
            <VStack alignItems="start">
                <Heading>{title}</Heading>
                <Text>{description}</Text>
                <Button colorScheme="primary" variant="solid" w="100%">Add To Cart</Button>
                <Heading as="h3" pt={10}>Weight</Heading>
                <Select fontSize="2xl" value={variantIndex} onChange={handeChangeVariant}>
                    {variants.map((variant, index) => (
                        <option key={variant.id} value={index}>{variant.weight} {variant.weightUnit}</option>
                    ))}
                </Select>
                <Heading as="h3" pt={10}>Price</Heading>
                <Text fontSize="2xl">${selectedVariant.price}</Text>
            </VStack>
        </SimpleGrid>
    );
};

export default Product;

