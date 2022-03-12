import { extendTheme } from '@chakra-ui/react';


export default extendTheme({
    colors: {
        primary: {
            50: 'hsl(36, 10%, 51%)',
            100: 'hsl(36, 15%, 51%)',
            200: 'hsl(36, 20%, 51%)',
            300: 'hsl(36, 25%, 51%)',
            400: 'hsl(36, 30%, 51%)',
            500: 'hsl(36, 35%, 51%)',
            600: 'hsl(36, 42%, 51%)',
            700: 'hsl(36, 50%, 51%)',
            800: 'hsl(36, 60%, 51%)',
            900: 'hsl(36, 70%, 51%)',
            text: 'black',
            textLight: 'white',
        },
        secondary: { 600: 'green' },
    },
    custom: { headerHeight: '64px' },
});
