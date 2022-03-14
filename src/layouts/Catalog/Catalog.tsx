import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { CatalogProps } from './types';

import Search from '~/components/Search/Search';
import Products from '~/layouts/Products';


const Catalog: FC<CatalogProps> = ({ products }) => {


    return (
        <Box display="flex" flexDir="column"> 
            <Search />
            <Products products={products} />
        </Box>
    );
};

export default Catalog;


