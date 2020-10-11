import * as React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '~/utils/config';
import { ThemeProvider } from '~/utils/Context/ThemeContext';
import '../assets/css/app.css';

export default function CustomApp({ Component, router, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;700&family=Source+Serif+Pro:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <DefaultSeo
        titleTemplate={`%s - ${config.TITLE}`}
        description={config.DESCRIPTION}
        canonical={config.BASE_URL + router.asPath || ''}
        openGraph={{
          title: config.TITLE,
          url: config.BASE_URL,
          description: config.DESCRIPTION,
          type: 'website',
          site_name: config.TITLE
        }}
      />

      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    </>
  );
}
