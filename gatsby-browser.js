/* eslint-disable react/jsx-filename-extension */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';

import './src/styles/globals.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import Layout from './src/layouts/Layout';


const theme = extendTheme({
    colors: {
        primary: 'red',
        secondary: 'green',
    }, 
});


export const wrapRootElement = ({ element }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                {element}
            </Layout>
        </ChakraProvider>
    );
};
