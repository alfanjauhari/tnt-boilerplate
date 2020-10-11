import * as React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Main from '~/components/layouts/Main';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Main>
        <div className="hello">Hello World</div>
      </Main>
    </>
  )
};

export default Home;
