import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import Header from '../Header';


const Layout: FC = ({ children }) => {
    return (
        <Box
            bgColor="primary.100" 
            display="flex" 
            flexDirection="column"
            height="100vh"
        >
            <Header />
            <Box as="main" flexGrow={1}>
                {children}
            </Box>
            <Box as="footer" flexShrink={0}>
                FOOTER
            </Box>
        </Box>
    );
};

export default Layout;
