import { Box } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';


const Hero: FC = () => {
    const { file: { childImageSharp: { gatsbyImageData: image } } } = useStaticQuery(graphql`
        query Hero {
            file(name: {eq: "coffee_bg"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        width: 1920
                        height: 480
                        transformOptions: {fit: COVER, cropFocus: CENTER}
                    )
                }
            }
        }
  `);


    return (
        <Box position="relative" zIndex={-1}>
            <Box height="480" position="absolute" width="100%">
                <GatsbyImage alt="hero" image={image} />
            </Box>
            <Box height="480" zIndex={-1}>
                Hero
            </Box>
        </Box>
    );
};

export default Hero;

