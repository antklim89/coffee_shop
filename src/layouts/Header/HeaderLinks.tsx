import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';


const HeaderLinks = () => (
    <>
        <li>
            <Button
                as={Link}
                color="primary.textLight"
                pl={4} pr={4}
                to="/"
                variant="link"
            >
                HOME
            </Button>
        </li>
        <li>
            <Button
                as={Link}
                color="primary.textLight"
                pl={4} pr={4}
                to="/about"
                variant="link"
            >
                ABOUT
            </Button>
        </li>
        <li>
            <Button
                as={Link}
                color="primary.textLight"
                pl={4} pr={4}
                to="/products"
                variant="link"
            >
                PRODUCTS
            </Button>
        </li>
        <li>
            <Button
                as={Link}
                color="primary.textLight"
                pl={4} pr={4}
                to="/contacts"
                variant="link"
            >
                CONTACTS
            </Button>
        </li>
        <li>
            <Button
                as={Link}
                color="primary.textLight"
                pl={4} pr={4}
                to="/blogs"
                variant="link"
            >
                BLOGS
            </Button>
        </li>
    </>
);

export default HeaderLinks;
