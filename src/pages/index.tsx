import { PageProps, graphql } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: FC<PageProps<DataProps>> = () => {
    return (
        <>
            <Seo title="Using TypeScript" />
        </>
    );
};

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
export async function getServerData() {
    try {
        return { props: { foo: 'bar' } };
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        };
    }
}
