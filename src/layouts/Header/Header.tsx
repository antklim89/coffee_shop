import { Stack, Box, Container, Text, Spacer } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';

import Coffee from '~/assets/coffee.svg';


const Header: FC = () => {
    return (
        <Box as="header" sx={{ bg: 'linear-gradient(black, transparent)', pos: 'fixed', width: '100%', zIndex: 100 }}>
            <Container maxW='container.lg'>
                <Stack
                    alignItems="center"
                    direction="row"
                    height={16}
                    spacing='24px'
                >
                    <Text
                        alignItems="center"
                        as={Link}
                        color="primary.textLight"
                        display="flex"
                        fontSize="x-large"
                        fontWeight="bold" to="/"
                    >
                        <Coffee height="42px" width="42px" />
                        <Box ml={[1, 2, 6]}>COFFEE&nbsp;SHOP</Box>
                    </Text>
                    <Spacer />
                    <HeaderDrawer />
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;


