import { extendTheme } from '@chakra-ui/react';


export default extendTheme({
    colors: {
        primary: {
            50: 'hsl(36, 42%, 90%)',
            100: 'hsl(36, 42%, 85%)',
            200: 'hsl(36, 42%, 80%)',
            300: 'hsl(36, 42%, 70%)',
            400: 'hsl(36, 42%, 60%)',
            500: 'hsl(36, 42%, 55%)',
            600: 'hsl(36, 42%, 51%)',
            700: 'hsl(36, 42%, 40%)',
            800: 'hsl(36, 42%, 30%)',
            900: 'hsl(36, 42%, 20%)',
            text: 'black',
            textLight: 'white',
        },
        secondary: { 600: 'green' },
    },
    custom: { headerHeight: '64px' },
});
