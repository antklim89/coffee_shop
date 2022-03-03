

declare module '*.svg' {
    import { FC } from 'react';


    const content: FC<{height: string, width: string}>;
    export default content;
  }
