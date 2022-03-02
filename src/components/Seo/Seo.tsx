import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps, SeoQuery } from './types';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    keywords = [],
    title,
}) => {
    const { site: { siteMetadata } } = useStaticQuery<SeoQuery>(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
    );

    const metaDescription = `${siteMetadata.description} ${description || ''}`.trim();
    const defaultTitle = siteMetadata.title;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[
                ...meta,
                {
                    name: 'keywords',
                    content: [...keywords].join(', '),
                },
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ]}
            title={title}
            titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
        />
    );
};
