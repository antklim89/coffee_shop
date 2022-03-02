/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import './src/styles/globals.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import Layout from './src/layouts/Layout';


export const wrapRootElement = ({ element }) => {
    return (
        <Layout>
            {element}
        </Layout>
    );
};
