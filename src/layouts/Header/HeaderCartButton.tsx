import { Badge, IconButton } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { FC } from 'react';
import { FaCartPlus } from 'react-icons/fa';

import { useCart } from '~/components/CartProvider';


const HeaderCartButton: FC = () => {
    const { cart } = useCart();
    return (
        <Link to="/cart">
            <IconButton 
                aria-label='Cart' 
                icon={<FaCartPlus fill='white' />}
                variant="link"
            />
            <Badge colorScheme="red">{cart.length}</Badge>
        </Link>
    );
};

export default HeaderCartButton;
