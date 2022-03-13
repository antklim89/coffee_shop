import {
    Box, 
    Heading,
    VStack,
    SimpleGrid,
    Text, 
    Button,
    Select,
    NumberDecrementStepper,
    NumberIncrementStepper, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { useCart } from '~/components/CartProvider';
import { ICartItem, IProduct } from '~/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Product: FC<IProduct> = ({
    id, images, title, description, variants, createdAt, featuredImage, 
}) => {
    const { cart, updateCartItem } = useCart();


    const [cartItem, setCartItem] = useState<ICartItem>(() => (
        cart.find((storedCartItem) => storedCartItem.id === id) || {
            qty: 1,
            id,
            createdAt,
            title,
            featuredImage,
            variant: {
                id: variants[0].id,
                price: variants[0].price,
                weight: variants[0].weight,
                weightUnit: variants[0].weightUnit,
            },
        }
    ));

    const handeChangeVariant: ChangeEventHandler<HTMLSelectElement>  = useCallback((e) => {
        const newSelectedVariant = variants.find((i) => i.id === e.target.value);
        if (!newSelectedVariant) return;

        setCartItem((prevCartItem) => ({
            ...prevCartItem, 
            variant: {
                id: newSelectedVariant.id,
                price: newSelectedVariant.price,
                weight: newSelectedVariant.weight,
                weightUnit: newSelectedVariant.weightUnit,
            }, 
        }));
    }, []);

    const handleChangeQty = useCallback((_: string, qty: number) => {
        setCartItem((prevCartItem) => ({ ...prevCartItem, qty }));
    }, []);

    useEffect(() => {
        updateCartItem(cartItem);
    }, [cartItem]);

    
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
                <Select fontSize="2xl" value={cartItem.variant.id} onChange={handeChangeVariant}>
                    {variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>{variant.weight} {variant.weightUnit}</option>
                    ))}
                </Select>

                <Heading as="h3" pt={10}>Quantity</Heading>
                <NumberInput
                    max={999}
                    min={0}
                    precision={0}
                    step={1}
                    value={cartItem.qty}
                    onChange={handleChangeQty}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Heading as="h3" pt={10}>Price</Heading>
                <Text fontSize="2xl">${cartItem.variant.price}</Text>

                <Heading as="h3" pt={10}>Total Price</Heading>
                <Text fontSize="2xl">${(parseFloat(cartItem.variant.price) * cartItem.qty).toFixed(2)}</Text>
            </VStack>
        </SimpleGrid>
    );
};

export default Product;

