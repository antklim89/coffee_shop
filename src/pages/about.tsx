import { Container } from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';
import About from '~/layouts/About';


const AboutPage: FC<PageProps> = () => {

    return (
        <>
            <Seo title="About" />
            <Container maxW='container.lg'>
                <About />
            </Container>
        </>
    );
};

export default AboutPage;
