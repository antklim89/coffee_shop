import {
    Button, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useMediaQuery,  useDisclosure,
} from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { FC, useRef } from 'react';

import HeaderLinks from './HeaderLinks';


const HeaderDrawer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const { breakpoints } = useTheme() as {breakpoints: {lg: string}};
    const [isLargerThenLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

    if (isLargerThenLg) return (
        <Stack as="ul" direction="row">
            <HeaderLinks />
        </Stack>
    );
    return (
        <>
            <Button 
                colorScheme="primary" 
                ref={btnRef}
                variant="outline"
                onClick={onOpen}
            >
                CLICK
            </Button>
            <Drawer
                finalFocusRef={btnRef}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay onClick={onClose} />
                <DrawerContent>
                    <DrawerBody sx={{ 'a': { color: 'primary.text' } }}>
                        <Stack as="ul" direction="column">
                            <HeaderLinks />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HeaderDrawer;
