import { Box, Container, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { FC } from 'react';


const Hero: FC = () => {
    const { custom: { headerHeight } } = useTheme() as { custom: {headerHeight: number } };

    const { file: { childImageSharp: { fluid } } } = useStaticQuery(graphql`
        query Hero {
            file(name: {eq: "coffee_bg"}) {
                childImageSharp {
                    fluid {
                        srcWebp 
                    }
                }
            }
        }
    `);

    return (
        <Box
            bgImage={fluid.srcWebp} 
            bgRepeat="no-repeat" 
            bgSize="cover"
            height={[240,240,480]}
            mt={`-${headerHeight}`}
        >
            <Container
                maxW='container.lg'
            >
                <Text
                    as="h1"
                    color="white"
                    fontSize={['3xl', '5xl', '5xl']}
                    fontWeight="bold"
                    pt={20}
                    width={['100%', '100%', '100%', '40%']}
                >
                    FRESH COFFEE
                    IN THE MORNING
                </Text>
                <br />
                <Text 
                    color="white"
                    display={['none', 'none', 'inline-block']}
                    width={['100%', '100%', '100%', '40%']}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa vero cumque
                    incidunt ut perspiciatis illo
                    ipsa explicabo, nihil saepe repudiandae!
                </Text>
            </Container>
        </Box>
    );
};

export default Hero;

