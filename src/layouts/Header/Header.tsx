import { Stack, Box, Container, Text, Spacer } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';

import HeaderDrawer from './HeaderDrawer';


const Header: FC = () => {
    return (
        <Box as="header" sx={{ bg: 'linear-gradient(black, transparent)', pos: 'fixed', width: '100%' }}>
            <Container maxW='container.lg'>
                <Stack
                    alignItems="center"
                    direction="row"
                    height={16}
                    spacing='24px'
                >
                    <Text
                        as={Link}
                        color="primary.textLight"
                        display="flex"
                        fontSize="x-large"
                        fontWeight="bold" to="/"
                    >
                        COFFEE&nbsp;SHOP
                    </Text>
                    <Spacer />
                    <HeaderDrawer />
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;


