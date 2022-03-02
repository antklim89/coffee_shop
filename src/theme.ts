import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
    colors: {
        primary: {
            50: 'green',
            100: '#111',
            200: '#222',
            300: '#333',
            400: '#444',
            500: '#555',
            600: 'red',
            700: '#777',
            800: '#888',
            900: '#999',
            text: 'black', 
            textLight: 'white', 
        },
        secondary: 'green',
    },
});
