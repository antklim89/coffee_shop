import { Stack, Box, Container, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { HeaderProps } from './types';


const Header: FC<HeaderProps> = () => {
    return (
        <Box as="header" sx={{ bg: 'linear-gradient(black, transparent)', pos: 'fixed', width: '100%' }}>
            <Container maxW='container.lg'>
                <Stack
                    alignItems="center"
                    direction="row"
                    height={16}
                    spacing='24px'
                >
                    <Text>
                        LOGO
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;

